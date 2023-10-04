import { Component } from '@angular/core';

@Component({
  selector: 'app-pv-one',
  templateUrl: './pv-one.component.html',
  styleUrls: ['./pv-one.component.css']
})
export class PvOneComponent {
 code: string = `
import matplotlib
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_predict, cross_val_score
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import StratifiedKFold


input_file = "sports_Training.csv"
df = pd.read_csv(input_file, header=0)
data = df[(df['CapacidadDecision'] >= 3) & (df['CapacidadDecision'] <= 100)]

print(data.values)

labelEncoder = LabelEncoder()

X = data.loc[:, data.columns != 'DeportePrimario']
y = data['DeportePrimario'].values

y_encoded = labelEncoder.fit_transform(y)

lda = LinearDiscriminantAnalysis()

cv = StratifiedKFold(n_splits=10, shuffle=True, random_state=0)
pred = cross_val_predict(lda, X, y_encoded, cv=cv)

print("Predicted")
print(pred)

print("Cross validation score")
print(classification_report(y_encoded, pred, digits=3))

input_file = "sports_Scoring.csv"
df2 = pd.read_csv(input_file, header=0)
data2 = df2[(df2['CapacidadDecision'] >= 3) & (df2['CapacidadDecision'] <= 100)]
X2 = data2
lda.fit(X, y_encoded)

pred2 = lda.predict(X2)
print("Predicted")
print(pred2.tolist())
print(labelEncoder.classes_)
 `
}
