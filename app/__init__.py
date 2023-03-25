from flask import Flask
from flask_wtf.csrf import CSRFProtect


def create_app():
    csrf = CSRFProtect()
    app: Flask = Flask(__name__)
    csrf.init_app(app)
    app.secret_key = "324asdkfj#235kzdjs#*asdf$"
    return app
