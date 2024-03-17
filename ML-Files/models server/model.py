from flask import Flask, request, jsonify
from joblib import load
import numpy as np

app = Flask(__name__)
model_pathRF = r'D:\Atishay\homework\Project minor\RandomForest.joblib'
model_pathk = r'D:\Atishay\homework\Project minor\classifierK.joblib'
model_pathDT = r'D:\Atishay\homework\Project minor\DecisionTree.joblib'
model_pathMLP = r'D:\Atishay\homework\Project minor\classifierMLP.joblib'
modelRF = load(model_pathRF)
modelK = load(model_pathk)
modelDT = load(model_pathDT)
modelMLP = load(model_pathMLP)
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    input_data = data['data'] 
    print(input_data)
    predictionRF = modelRF.predict(input_data).tolist()
    predictionK = modelK.predict(input_data).tolist()
    predictionMLP = modelMLP.predict(input_data).tolist()
    predictionDT = modelDT.predict(input_data).tolist()
    l1 = {"RF": predictionRF, "K": predictionK, "DT": predictionDT, "predictionMLP": predictionMLP}

    return jsonify(l1)

if __name__ == '__main__':
    app.run(port=5000)
