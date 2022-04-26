"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from flask_jwt_extended import JWTManager, get_jwt_identity, create_access_token
from werkzeug.security import generate_password_hash, check_password_hash 

api = Blueprint('api', __name__)

@api.route('/users', methods=['GET'])
def get_all_users():

    all_users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), all_users))

    if not all_users: return jsonify({"Error": "No hay usuarios"}, all_users), 200

    else: return jsonify({"Error": "Todos los suarios han sido econtrados"}, all_users), 200

@api.route('/Registro', methods=['POST'])
def registro():

        if request.method == 'POST':
       
            username = request.json.get("username")
            email = request.json.get("email")
            password = request.json.get("password")

            user = User.query.filter_by(email=email).first()

            if not username: return jsonify({"Error": "El Username es requerido"}), 400
            if not email: return jsonify({"Error": "El email es requerido"}), 400
            if not password: return jsonify({"Error": "El password es requerido"}), 400

            if user: return jsonify({"Error": "Usuario ya existe"}), 400

            user = User()
            user.username = username
            user.email = email
            user.password = generate_password_hash(password)
            user.save()  

             if not check_password_hash(user.password, password): return jsonify({"Error": "email/password son incorrectos"}), 400

            access_token = create_access_token(identity=user.id)

            data = {
                "access_token": access_token,
                "user": user.serialize()
            }

            if user: return jsonify(data), 201


@api.route('/Login', methods=['POST'])
def login():

    if request.method == 'POST':

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
    else:
        return jsonify({"Error": "Inicio de sesión invalido"}), 200