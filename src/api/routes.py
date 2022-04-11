"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200  

#Este funciona perfecto con el cliente (postman) y (app-front)
@api.route('/registro', methods=['POST']) 
def add_user():
    request_body = request.get_json()
    username = request_body["username"]
    email = request_body["email"] 
    password = request_body["password"]
   

    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg":"Usuario ya existe"}), 444
    else:
        new_user = Username(username=username,email=email,password=password,is_active=True)
        db.session.add(new_user)
        db.session.commit()
        print(new_user)
        return jsonify({"msg":"Usuario registrado exitosamente"}), 200
   
#route con POST LOGIN
# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/Login", methods=["POST"])
def create_login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token) 


#@jwt_required()
@api.route("/private", methods=["GET"])
@jwt_required()
def get_private():

    email = get_jwt_identity()
    dictionary = {"message": "Bienvenid@, " + email}
   
    return jsonify(dictionary) 
