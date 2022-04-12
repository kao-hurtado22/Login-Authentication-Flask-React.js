"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

@api.route('/User', methods=['GET','POST'])
def users():

        if request.method == 'POST':
       
            username = request.json.get("username")
            email = request.json.get("email")
            password = request.json.get("password")

            if not user: return jsonify({"Error": "El usuario ya existe!"}), 400

            user = User()
            user.username = username
            user.email = email
            user.password = password
            user.save()  

            return jsonify(user.serialize()), 201

            if not username: return jsonify({ "Error": "El username sera requerido!"}), 400
            if not email: return jsonify({ "Error": "El email sera requerido!"}), 400
            if not password: return jsonify({ "Error": "La contraseña sera requerida!"}), 400

        return jsonify("exito")

@api.route('/Registro', methods=['GET','POST'])
def registro():
        if request.method == 'POST':
       
            username = request.form['username']
            email = request.json.get("email")
            password = request.json.get("password")

            if not user: return jsonify({"Error": "El usuario ya existe!"}), 400

            user = User()
            user.username = username
            user.email = email
            user.password = password
            user.save()  

            return jsonify(user.serialize()), 201

            if not username: return jsonify({ "Error": "El username sera requerido!"}), 400
            if not email: return jsonify({ "Error": "El email sera requerido!"}), 400
            if not password: return jsonify({ "Error": "La contraseña sera requerida!"}), 400

        return jsonify("exito")


@api.route('/Login', methods=['GET','POST'])
def login():

    email = request.json.get('email'),
    password = request.json.get('password'),

    if not email: return jsonify({ "Error": "El email sera requerido!"}), 400
    if not contraseña: return jsonify({ "Error": "La contraseña sera requerida!"}), 400

    user = User.query.filter_by(email=email).first()

    if not user: return jsonify({"Error": "email/password es incorrecto!"}), 401
    if not check_password_hash(user.password, password): return jsonify({"Error": "email/password es incorrecto!"}), 401

    access_token = create_access_token(identity=user.id, expire=expires)

    data = {
        "access_token": access_token,
        "user": user.serialize()
    }
    return jsonify(data), 200