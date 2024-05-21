"strict mode";

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const contentType = require("content-type");
const getRawBody = require("raw-body");
const rateLimit = require("express-rate-limit");
const { AuthURL, getUser } = require("./Component/googleapi");
const { CreateUser, FindUser } = require("./Component/DatabaseMethods");
require("dotenv").config();

secret_key = process.env.SECRET;
const ConnectionURL = process.env.CONNECTION_URL;

const app = express();

/*----------------------------------------------------------------------------------------------*/

mongoose
  .connect(ConnectionURL, {
    family: 4,
  })
  .then(() => console.log("Connected To Database"))
  .catch((err) => console.log(err));
///*
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "sessionID",
    secret: secret_key,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 1000,
    },
  })
);
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 20,
    message: "Too Many Request, try again in 1 Minute",
  })
);
app.use(
  cors({
    credentials: true,
  })
);
app.use(
  express.json({ limit: "1kb" }),
  express.urlencoded({ extended: true, limit: "1kb" })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, content-type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, GET");
    return res.status(200).json({});
  }
  if (!req.headers["content-type"]) {
    req.headers["content-type"] = "text/plain";
    req.headers["x-content-type-options"] = "nosniff";
  }
  getRawBody(
    //Limit Content Length
    req,
    {
      length: req.headers["content-length"],
      limit: "1mb",
      encoding: contentType.parse(req).parameters.charset,
    },
    function (err, string) {
      if (err) return next(err);
      req.text = string;
      next();
    }
  );
});

/*----------------------------------------------------------------------------------------------*/
const authCheck = (req, res, next) => {
  if (!req.session.user) {
    res.redirect("/auth/google");
  } else {
    next();
  }
};

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <div>
          <ul>
            <a href="/">home</a>
            <a href="/auth/google">Google Login</a>
            <a href="/auth/logout">Logout</a>
          </ul>
        </div>
        <div>
        <p>${
          req.session.user
            ? `logged in as ${req.session.user.name}`
            : "you are not logged in"
        }<p>
        </div>
      </body>
    </html>
  `);
});
app.get("/profile", authCheck, (req, res) => {
  res.send(
    `
    <html>
      <body>
        <div>
          <ul>
            <a href="/">home</a>
            <a href="/auth/google">Google Login</a>
            <a href="/auth/logout">Logout</a>
          </ul>
        </div>
        <div>
        <p>you are logged in as ${req.session.user.name}</p>
        </div>
      </body>
    </html>
  `
  );
});

app.get("/auth/google/redirect", async (req, res) => {
  const code = String(req.query.code);
  //let user;
  try {
    let user = await getUser(code);
    if (user.id && user.email) {
      try {
        let fetch_user = await FindUser(user);
        if (!fetch_user) {
          await CreateUser(user);
          req.session.user = user;
        } else {
          req.session.user = user;
        }
      } catch (err) {
        console.error(err);
      }
    }
  } catch (err) {
    console.error(err);
  }
  res.redirect("/profile");
});

app.get("/auth/logout", (req, res) => {
  req.session.destroy((err, res) => {
    if (err) {
      console.log("cant access session or destroy");
      req.session = null; // Setting session to null
    }
  });
  res.redirect("/");
});

app.get("/auth/google", async (req, res) => {
  res.redirect(await AuthURL());
});

app.use((req, res, next) => {
  res.status(404).send("The page you are trying to access doesn't exist.");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something Happened at our side");
});
app.listen(3000, () => {
  console.log("Running at PORT 3000");
});
