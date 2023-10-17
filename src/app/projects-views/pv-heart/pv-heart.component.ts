import { Component } from '@angular/core';

@Component({
  selector: 'app-pv-heart',
  templateUrl: './pv-heart.component.html',
  styleUrls: ['./pv-heart.component.css']
})
export class PvHeartComponent {
code1: string = `input_file = "cardiac-training.csv"
df = pd.read_csv(input_file, header=0)
print(df.values);`

code2: string = `
X = df.loc[:, df.columns != '2do_Ataque_Corazon']
y = df['2do_Ataque_Corazon'].values
`

code3: string = `
train_X, test_X, train_y, test_y = train_test_split(X, y, test_size=0.30, random_state = 0, shuffle=True)
lr = LogisticRegression()
lr = lr.fit(train_X, train_y)
`

code4: string = `
y_pred = lr.predict(test_X)
print("Predicted vs Expected")
print(y_pred)
print(test_y)
`

code5: string = `
print(classification_report(test_y, y_pred, digits=3))
print(confusion_matrix(test_y, y_pred))
`

code6: string = `
input_file2 = "cardiac-scoring.csv"
df2 = pd.read_csv(input_file2, header=0)
print(df.values)

lr2 = LogisticRegression()
lr2 = lr2.fit(X, y)

X2 = df2
pred2 = lr2.predict(X2)
print("Predicciones en base al dataset scoring")
print(pred2)
`

code7: string = `
print("Cantidad de si y no")
print(pred2[pred2 == "Si"].size)
print(pred2[pred2 == "No"].size)
`

}


