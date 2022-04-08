"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token,jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/User', methods=['POST', 'GET'])
def users():

    if request.method == 'POST':

        email = request.json.get('email')
        password = request.json.get('password')

        response_body = {"Error": "El usuario ya existe!"}
        return jsonify(response_body), 200

        user = User()
        user.email = email
        user.password = password
        user.save()  

        return jsonify(user.serialize()), 201

        if not email: return jsonify({ "Error": "El email sera requerido!"}), 400
        if not password: return jsonify({ "Error": "La password sera requerida!"}), 400

    return jsonify("exito")


@api.route('/Login', methods=['POST', 'GET'])
def login():

    email = request.json.get('email'),
    password = request.json.get('password'),

    if not email: return jsonify({ "Error": "El email sera requerido!"}), 400
    if not password: return jsonify({ "Error": "La password sera requerida!"}), 400

    user = User.query.filter_by(email=email).first()

    if not user: return jsonify({"Error": "email/password es incorrecto!"}), 401
    """ if not check_password_hash(user.password, password): """ 
        
        
return jsonify({"Error": "email/password es incorrecto!"})


    access_token = create_access_token(identity=email)

    data = {
        "access_token": access_token,
        "user": user.serialize()
    }
    return jsonify(data), 200