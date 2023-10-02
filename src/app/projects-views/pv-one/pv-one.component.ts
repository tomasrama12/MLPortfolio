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
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import confusion_matrix, classification_report
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_predict, cross_val_score
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import StratifiedKFold

input_file = "bank.csv"
df = pd.read_csv(input_file, header=0, sep=";")
#delete default column
del df['default']

print(df.values)
cat_cols = df.select_dtypes(include=['object']).columns

#Este paso es importante ya que esta libreria usando el cross validation no acepta valores categoricos, por ende los transformo a numericos.
label_encoder = LabelEncoder()
for col in cat_cols:
    df[col] = label_encoder.fit_transform(df[col])

X = df.loc[:, df.columns != 'y']
y = df['y'].values
lr = LogisticRegression()

#Importante a destacar el shuffle true ya que asi se mezclan los datos y no ocurren sesgos de ningun tipo
cv = StratifiedKFold(n_splits=10, shuffle=True, random_state=0)
pred = cross_val_predict(lr, X, y, cv=cv)

print("Tabla para comparar con RM")
print(classification_report(y, pred, digits=3))
 `
}
