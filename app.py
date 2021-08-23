from flask import Flask, request, jsonify
import twelvedata as td
import pandas as pd
app = Flask(__name__)
tda = td.TDClient(apikey="79e029422b1249208c83a068e5730e23")
@app.route('/stock', methods = ['GET'])
def test():
    stock = tda.time_series(symbol='AAPL', interval="1day", outputsize=30).as_pandas()
    sum = 0
    for x in range(len(stock)):
        sum += stock['volume'][x]
    msg="The average volume for APPL is {}".format(sum / len(stock))
    response = {
        'message': msg,
        'index': 1
    }
    return jsonify(response),200
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000)
    #check()