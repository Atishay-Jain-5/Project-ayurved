from flask import Flask, request, jsonify
from joblib import load
import numpy as np

app = Flask(__name__)
model_pathRF = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\RandomForest.joblib'
model_pathk = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\classifierK.joblib'
model_pathDT = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\DecisionTree.joblib'
# model_pathMLP = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\classifierMLP.joblib'
model_pathSVM = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\classifierSVM.joblib'
model_pathNB = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\classifierNB.joblib'
model_pathXGBoost = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\XGBoost.joblib'
model_pathQuadraticDiscriminantAnalysis = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\QuadraticDiscriminantAnalysis.joblib'

# model_dia_pathNB = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\diabetes\NaiveBayes_diab_.joblib'
# model_dia_pathSVM = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\diabetes\SVM_diab_.joblib'
# model_dia_pathLR = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\diabetes\LogisticRegression_diab_.joblib'
# model_heart_grad_path= r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\heart\GradientBoostingClassifier_heart.joblib'
# model_heart_logi_path= r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\heart\LogisticRegression_heart.joblib'
# model_heart_NB_path= r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\heart\NaiveBayes_2_heart.joblib'
modelRF = load(model_pathRF)
modelK = load(model_pathk)
modelDT = load(model_pathDT)
modelSVM = load(model_pathSVM)
modelXGB = load(model_pathXGBoost)
modelQDA = load(model_pathQuadraticDiscriminantAnalysis)
# model_dia_LR=load(model_dia_pathLR)
# model_dia_SVM=load(model_dia_pathSVM)
# model_dia_NB=load(model_dia_pathNB)
# model_heart_grad=load(model_heart_grad_path)
# model_heart_logi=load(model_heart_logi_path)
# model_heart_NB=load(model_heart_NB_path)
# modelSVM = load(model_pathSVM)
modelNB = load(model_pathNB)
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    # print(data)
    input_data = data['data'] 
   
    predictionRF = modelRF.predict(input_data).tolist()
    predictionK = modelK.predict(input_data).tolist()
    # predictionMLP = modelMLP.predict(input_data).tolist()
    predictionDT = modelDT.predict(input_data).tolist()
    predictionSVM = modelSVM.predict(input_data).tolist()
    predictionNB = modelNB.predict(input_data).tolist()
    predictionXGB = modelXGB.predict(input_data).tolist()
    predictionQDA = modelQDA.predict(input_data).tolist()
    l1 = {"RF": predictionRF, "K": predictionK, "DT": predictionDT, "predictionSVM": predictionSVM,"predictionNB": predictionNB,"predictionXGB": predictionXGB,"predictionQDA": predictionQDA}
   # print(l1)
    return jsonify(l1)
# @app.route('/predictdiab', methods=['POST'])
# def predictdiab():
    
#     data = request.get_json(force=True)
#     print(data)

   
#     input_data = data['data']  
   
#     input_data_as_numpy_array = np.asarray(input_data)

    
#     input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

  
#     predictionLR = model_dia_LR.predict(input_data_reshaped).tolist()
#     predictionNB = model_dia_NB.predict(input_data_reshaped).tolist()
#     predictionSVM = model_dia_SVM.predict(input_data_reshaped).tolist()

   
#     l1 = {"LR": predictionLR, "NB": predictionNB, "SVM": predictionSVM}

    
#     return jsonify(l1)


# @app.route('/predictheart', methods=['POST'])
# def predictheart():
    
#     data = request.get_json(force=True)
#     print(data)

   
#     input_data = data['data']  
   
#     input_data_as_numpy_array = np.asarray(input_data)

    
#     input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

  
#     predictionheart = model_heart_grad.predict(input_data_reshaped).tolist()
#     predictionlogi = model_heart_logi.predict(input_data_reshaped).tolist()
#     predictionNB = model_heart_NB.predict(input_data_reshaped).tolist()

   
#     l1 = {"LR": predictionlogi, "NB": predictionNB, "Gradient": predictionheart}

    
    # return jsonify(l1)
if __name__ == '__main__':
    app.run(port=5000)
