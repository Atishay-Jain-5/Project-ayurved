from flask import Flask, request, jsonify
from joblib import load
import numpy as np

app = Flask(__name__)
model_pathRF = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\RF.joblib'
model_pathk = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\knn.joblib'
# model_pathDT = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\DecisionTree.joblib'
# model_pathMLP = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\classifierMLP.joblib'
model_pathSVM = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\SVM.joblib'
model_pathNB = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\NB.joblib'
model_pathXGBoost = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\XGB.joblib'
model_pathQuadraticDiscriminantAnalysis = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\models server\QDA.joblib'

# model_dia_pathNB = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\diabetes\NaiveBayes_diab_.joblib'
# model_dia_pathSVM = r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\diabetes\SVM_diab_.joblib'
# model_dia_pathLR = r'E:\Atishay\homework\Prsoject minor\Project-ayurved\ML-Files\diabetes\LogisticRegression_diab_.joblib'
# model_heart_grad_path= r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\heart\GradientBoostingClassifier_heart.joblib'
# model_heart_logi_path= r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\heart\LogisticRegression_heart.joblib'
# model_heart_NB_path= r'E:\Atishay\homework\Project minor\Project-ayurved\ML-Files\heart\NaiveBayes_2_heart.joblib'
modelRF = load(model_pathRF)
modelK = load(model_pathk)
# modelDT = load(model_pathDT)
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
    # predictionDT = modelDT.predict(input_data).tolist()
    predictionSVM = modelSVM.predict(input_data).tolist()
    predictionNB = modelNB.predict(input_data).tolist()
    predictionXGB = modelXGB.predict(input_data).tolist()
    predictionQDA = modelQDA.predict(input_data).tolist()
    # print(predictionXGB)
    # print(predictionQDA)
    xgbmapping = {
  "0": "(vertigo) Paroymsal  Positional Vertigo",
  "1": "AIDS",
  "2": "Acne",
  "3": "Acute laryngitis",
  "4": "Acute otitis media",
  "5": "Acute rhinosinusitis",
  "6": "Alcoholic hepatitis",
  "7": "Allergy",
  "8": "Anaemia",
  "9": "Arthritis",
  "10": "Bronchial Asthma",
  "11": "Bronchiectasis",
  "12": "Bronchitis",
  "13": "Bronchospasm / acute asthma exacerbation",
  "14": "Cervical spondylosis",
  "15": "Chicken pox",
  "16": "Chronic cholestasis",
  "17": "Common Cold",
  "18": "Dengue",
  "19": "Diabetes ",
  "20": "Dimorphic hemmorhoids(piles)",
  "21": "Drug Reaction",
  "22": "Epiglottitis",
  "23": "Fungal infection",
  "24": "GERD",
  "25": "Gastroenteritis",
  "26": "Heart attack",
  "27": "Hepatitis B",
  "28": "Hepatitis C",
  "29": "Hepatitis D",
  "30": "Hepatitis E",
  "31": "Hypertension ",
  "32": "Hyperthyroidism",
  "33": "Hypoglycemia",
  "34": "Hypothyroidism",
  "35": "Impetigo",
  "36": "Influenza",
  "37": "Inguinal hernia",
  "38": "Jaundice",
  "39": "Malaria",
  "40": "Migraine",
  "41": "Osteoarthristis",
  "42": "Panic attack",
  "43": "Paralysis (brain hemorrhage)",
  "44": "Peptic ulcer diseae",
  "45": "Pneumonia",
  "46": "Psoriasis",
  "47": "Tuberculosis",
  "48": "Typhoid",
  "49": "Urinary tract infection",
  "50": "Varicose veins",
  "51": "Viral pharyngitis",
  "52": "Whooping cough",
  "53": "hepatitis A"
}

    l1 = {
        "RF": predictionRF, 
          "K": predictionK, 
        #   "DT": predictionDT, 
          "predictionSVM": predictionSVM,
          "predictionNB": predictionNB,
          "predictionXGB": [xgbmapping[str(predictionXGB[0])]],
          "predictionQDA": predictionQDA
          }
    print(l1)
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
