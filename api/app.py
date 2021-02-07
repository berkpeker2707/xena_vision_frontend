from flask import Flask

app = Flask(__name__)


@app.route("/")
def helloThere():
    return "<h1>HELLO THERE!</h1>"
