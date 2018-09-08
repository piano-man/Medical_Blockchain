import matplotlib.pyplot as plt
import csv
def plot(d):
    for x in d:
        print(x)
    x = d[0]
    y = d[1]
    x2 = d[2]
    y2 = d[3]
    fig = plt.figure()
    plt.plot(x,y,'ro')
    plt.plot(x2,y2,'bo')
    mix = min(min(x),min(x2))
    mx = max(max(x),max(x2))
    my = max(max(y),max(y2))
    miy = min(min(y),min(y2))
    plt.axis([0,mx+100,0,my+100])

    fig.savefig("time_comparision.png")
def getLogs(filename):
    vinay_space = []
    with open("./logs/"+filename,"r") as f:
        reader = csv.reader(f,delimiter= " " )
        for row in reader:
            newrow = []
            for x in row:
                x = float(x.strip())
                newrow.append(x)
            vinay_space.append(newrow)
    return vinay_space
files = ['ipfs','mongo']
data = []
for x in files:
    data.append(getLogs(x))
    
d = []
for j,x in enumerate(data):
    #print(x)
    y = []
    z = []
    for s in x:
        if(s[0] == 10):
            break
        y.append(s[0])
        z.append(s[1])
    d.append(y)
    d.append(z)
for x in d:
    print(x)
plot(d)