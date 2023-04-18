from flask import Flask, request, jsonify

from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/status', methods=['GET'])
@app.route('/sum', methods=['POST'])


def status():
    return jsonify(status="alive")

def sum():
    data = request.json
    a = data['a']
    b = data['b']
    c = a + b
    return jsonify(sum=c)


if __name__ == '__main__':
    app.run()

