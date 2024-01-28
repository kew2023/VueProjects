from sklearn.cluster import DBSCAN
from matplotlib.pyplot import plot
from sklearn.cluster import KMeans
from pandas import read_csv
df = read_csv('CC_GENERAL.csv')
# print(df)

# data=df[["PURCHASES_INSTALLMENTS_FREQUENCY", "PRC_FULL_PAYMENT"]].dropna()
data = df[["CASH_ADVANCE_FREQUENCY", "PRC_FULL_PAYMENT"]].dropna()
# в 3d возьмём ещё CASH_ADVANCE_FREQUENCY
# print(data)

criteries = []
for k in range(2, 10):
    kmeansModel = KMeans(n_clusters=k, random_state=3)
    kmeansModel.fit(data)
    criteries.append(kmeansModel.inertia_)
plot(range(2, 10), criteries)

# data.plot.scatter(x="CASH_ADVANCE_FREQUENCY", y = "PRC_FULL_PAYMENT", c='Red')
kmeansmodel1 = KMeans(n_clusters=5, random_state=8)
kmeansmodel1.fit(data)
labels1 = kmeansModel.labels_
print(list(labels1)[0:30])
# df.plot.scatter(x="PURCHASES_INSTALLMENTS_FREQUENCY", y = "PRC_FULL_PAYMENT", c=labels, colormap='viridis')
df.plot.scatter(x="CASH_ADVANCE_FREQUENCY",
                y="PRC_FULL_PAYMENT", c=list(labels1))

clustering = DBSCAN(eps=0.075, min_samples=15).fit_predict(data)
# df.plot.scatter(x="PURCHASES_INSTALLMENTS_FREQUENCY", y = "PRC_FULL_PAYMENT", c=clustering, colormap='viridis')
df.plot.scatter(x="CASH_ADVANCE_FREQUENCY",
                y="PRC_FULL_PAYMENT", c=list(clustering))
