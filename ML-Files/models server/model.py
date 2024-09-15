from flask import Flask, request, jsonify
from joblib import load
import numpy as np

app = Flask(__name__)
model_pathRF = r'D:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\RandomForest.joblib'
model_pathk = r'D:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\classifierK.joblib'
model_pathDT = r'D:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\DecisionTree.joblib'
model_pathMLP = r'D:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\classifierMLP.joblib'
# model_pathSVM = r'D:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\classifierSVM.joblib'
model_pathNB = r'D:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\classifierNB.joblib'
model_dia_pathNB = r'D:\Atishay\homework\Project minor\Project-ayurved\ML-Files\diabetes\NaiveBayes_diab_.joblib'
model_dia_pathSVM = r'D:\Atishay\homework\Project minor\Project-ayurved\ML-Files\diabetes\SVM_diab_.joblib'
model_dia_pathLR = r'D:\Atishay\homework\Project minor\Project-ayurved\ML-Files\diabetes\LogisticRegression_diab_.joblib'
modelRF = load(model_pathRF)
modelK = load(model_pathk)
modelDT = load(model_pathDT)
modelMLP = load(model_pathMLP)
model_dia_LR=load(model_dia_pathLR)
model_dia_SVM=load(model_dia_pathSVM)
model_dia_NB=load(model_dia_pathNB)
# modelSVM = load(model_pathSVM)
modelNB = load(model_pathNB)
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    print(data)
    input_data = data['data'] 
   
    predictionRF = modelRF.predict(input_data).tolist()
    predictionK = modelK.predict(input_data).tolist()
    predictionMLP = modelMLP.predict(input_data).tolist()
    predictionDT = modelDT.predict(input_data).tolist()
   # predictionSVM = modelSVM.predict(input_data).tolist()
    predictionNB = modelNB.predict(input_data).tolist()
    l1 = {"RF": predictionRF, "K": predictionK, "DT": predictionDT, "predictionMLP": predictionMLP,"predictionNB": predictionNB}
   # print(l1)
    return jsonify(l1)
@app.route('/predictdiab', methods=['POST'])
def predictdiab():
    
    data = request.get_json(force=True)
    print(data)

   
    input_data = data['data']  
   
    input_data_as_numpy_array = np.asarray(input_data)

    
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

  
    predictionLR = model_dia_LR.predict(input_data_reshaped).tolist()
    predictionNB = model_dia_NB.predict(input_data_reshaped).tolist()
    predictionSVM = model_dia_SVM.predict(input_data_reshaped).tolist()

   
    l1 = {"LR": predictionLR, "NB": predictionNB, "SVM": predictionSVM}

    
    return jsonify(l1)
if __name__ == '__main__':
    app.run(port=5000)
