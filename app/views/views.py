import pathlib
import os
from flask import jsonify, render_template, Blueprint, request, redirect, Response, current_app
from flask_mail import Message, Mail

import gspread

home_page = Blueprint(
    "home", __name__, static_folder="static", template_folder="templates")
scopes = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive'
]

gc = gspread.service_account(
    filename=pathlib.Path("path/to/credential.json"), scopes=scopes)
sh = gc.open_by_key("key of the sheet")
sheet = sh.sheet1


@home_page.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        _, name, email, message = request.form.values()
        print(name, email, message)
        sheet.append_row([name, email, message])
        print("SENDING")
        return jsonify({'success': True}), 200
    return render_template("/home/index.html")
