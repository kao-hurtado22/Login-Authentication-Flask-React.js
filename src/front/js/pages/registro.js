import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import { useHistory } from "react-router-dom";

export const Registro = () => {
    const { store, actions } = useContext(Context);
    const [registro, setRegistro] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [validation, setValidation] = useState(true);
    //const history = useHistory();

    const handleChange = ({ target: { name, value } }) => {
        setRegistro({ ...registro, [name]: value });
        console.log(registro);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            registro.name !== "" &&
            registro.email !== "" &&
            registro.password !== ""
        ) {

            console.log(registro);
            actions.setRegistro(registro);
            //history.push("/login");
            setRegistro({ name: "", email: "", password: "" });
            setValidation(true);

        } else
            setValidation(false)
    };
    //aca debe ir function de flux



    return (
        <div id="registro" className="container p-4 mt-4 shadow-sm">

            <form className="form" onSubmit={handleSubmit}>
                <h1 className="app-title1">Registro</h1>
                <div className="control-group">
                    <input
                        type="email"
                        placeholder="Email"
                        id="login-input"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        value={registro.email}
                    />
                </div>
                {!validation && <p className="text-danger text-center">Agregue email</p>}
                <div className="control-group">
                    <input
                        type="password"
                        placeholder="password"
                        id="login-pass"
                        className="form-control"
                        name="password"
                        onChange={handleChange}
                        value={registro.password}
                    />
                </div>
                {!validation && <p className="text-danger text-center">Agregue password</p>}
                <div className="row mt-3">
                    <button id="btn" type="submit" className="btn btn-primary btn-large btn-block">
                        Ingresar
                    </button>
                </div>
            </form>
        </div>
    );
};