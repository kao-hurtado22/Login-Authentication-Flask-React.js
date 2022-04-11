import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";


export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    console.log("este es tu token" + " " + store.token);

    const handleClick = (e) => {
        e.preventDefault();
        console.log(email, password);
        actions.setLogin(email, password);
    };

    if (store.token && store.token != "" && store.token != undefined) history.push("/");
    return (
        <div className="login">
            <div className="login-screen">
                <form className="form">
                    <div className="app-title">
                        <h1><b>Inicio de Sesión</b></h1>
                    </div>
                    {store.token && store.token != "" && store.token != undefined ? (
                        "tu estas logeado con este token " + " " + store.token
                    ) : (
                        <div className="container">
                            <div className="control-group">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    id="login-input"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="control-group">
                                <input
                                    type="password"
                                    placeholder="password"
                                    id="login-pass"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <a id="btn1" className="btn text-center btn-primary btn-large btn-block" /* href="/home" */ onClick={handleClick}>
                                Iniciar Sesión
                            </a>
                            <a className="login-link" href="#">
                                Olvidaste tu contraseña?
                            </a>
                        </div>
                    )
                    }
                </form>
            </div>
        </div>
    );
};
{/*   <div className="login">
                    <div className="login-screen">
                        <div className="app-title">
                            <h1>Inicio de Sesión</h1>
                        </div>
                        <div className="login-form">
                            <Formik
                                initialValues={{
                                    correo: "",
                                    contraseña: "",
                                }}
                                validate={(valores) => {
                                    let errores = {};
    
                                    if (!valores.correo) {
                                        errores.correo = 'Ingresa tu Correo'
                                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                                        errores.correo = 'Ingresa un correo valido'
                                    }
    
                                    if (!valores.contraseña) {
                                        errores.contraseña = "Ingresa tu contraseña";
                                    } else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]).{8,32}$/.test(valores.contraseña)) {
                                        errores.contraseña = "";
                                    }
                                    return errores;
                                }}
    
                                onSubmit={(valores, { resetForm }) => {
                                    resetForm();
                                    console.log("Formulario enviado")
                                    cambiarFormularioEnviado(true);
                                    setTimeout(() => cambiarFormularioEnviado(false), 4000);
                                }}
                            >
                                {({ errors }) => (
                                    <Form>
                                        <div className="control-group">
                                            <input
                                                type="text"
                                                className="login-field"
                                                defaultValue=""
                                                placeholder="Email"
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
                                        <a id="btn1" className="btn btn-primary btn-large btn-block" href="/home">
                                            Iniciar Sesión
                                        </a>
                                        <a className="login-link" href="#">
                                            Olvidaste tu contraseña?
                                        </a>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div> */}