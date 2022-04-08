import React from "react";
import reactDom from "react-dom";
import "../../styles/login.css";


export const Login = () => {
    return (
        <>
            <div className="login">
                <div className="login-screen">
                    <div className="app-title">
                        <h1>Inicio de Sesión</h1>
                    </div>
                    <div className="login-form">
                        <div className="control-group">
                            <input
                                type="text"
                                className="login-field"
                                defaultValue=""
                                placeholder="username"
                                id="login-input"
                            />
                            <label className="login-field-icon fui-user" htmlFor="login-name" />
                        </div>
                        <div className="control-group">
                            <input
                                type="password"
                                className="login-field"
                                defaultValue=""
                                placeholder="password"
                                id="login-pass"
                            />
                            <label className="login-field-icon fui-lock" htmlFor="login-pass" />
                        </div>
                        <a id="btn1" className="btn btn-primary btn-large btn-block" href="#">
                            Iniciar Sesión
                        </a>
                        <a className="login-link" href="#">
                            Olvidaste tu contraseña?
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
};