require("dotenv").config();
const querystring = require("querystring");
const axios = require("axios");
GOOGLE_CLIENT_ID = process.env.CLIENT_ID;
GOOGLE_CLIENT_SECRET = process.env.CLIENT_SECRET;

const AuthURL = () => {
  API_URL = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    redirect_uri: "http://localhost:3000/auth/google/redirect",
    client_id: GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
  };

  return String(API_URL + "?" + querystring.stringify(options));
};

const getToken = async (access_token) => {
  /* returns
  {
  "access_token": "String", 
  "scope": "https://www.googleapis.com/auth/userinfo.email openid", 
  "expires_in": 3599, 
  "token_type": "Bearer", 
  "id_token": "String"
}
  */
  const token_url = "https://oauth2.googleapis.com/token";
  const option = {
    code: access_token,
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: "http://localhost:3000/auth/google/redirect",
    grant_type: "authorization_code",
  };

  return await axios
    .post(token_url, querystring.stringify(option), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

const getUser = async (code) => {
  /* returns
  {
  "picture": "String", 
  "verified_email": true, 
  "id": "String", 
  "name": "", 
  "email": "String"
}
  */
  /*
  const request_uri =
    "https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token="; //
  var { access_token, id_token } = await getToken(code);
  const header = {
    Authorization: `Bearer ${id_token}`,
  };

  return await axios
    .get(request_uri + access_token, (headers = header)) //
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });*/
  const request_uri = "https://www.googleapis.com/oauth2/v2/userinfo"; //
  var { access_token, id_token } = await getToken(code);

  const header = {
    Authorization: `Bearer ${access_token}`,
  };
  const config = {
    headers: header,
  };
  return await axios
    .get(request_uri, config) //
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  AuthURL,
  getToken,
  getUser,
};
