import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Login() {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}));
    };


    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };



    return (
        <div className="login">
            <div className="lcontainer">
                <div className="ltitle">Login</div>
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        className="linput"
                        onChange={handleChange} />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        className="linput"
                        onChange={handleChange} />
                    <button className="lbutton" onClick={handleLogin} disabled={loading}>
                        {loading ? "Loading..." : "Login"}
                    </button>
                    {error && <span style={{ color: "red", marginTop: "10px" }}>{error.message}</span>}
            </div>
        </div>
    );
}


export default Login;