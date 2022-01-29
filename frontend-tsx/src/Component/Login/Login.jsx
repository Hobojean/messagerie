import * as React from "react";
import {useState} from "react";
import "./Login.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login () {
    const navigate = useNavigate();

    let userHasAuthentificated : boolean = false;

    const [name, setName] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:8000/user'
        const requestOptions = {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                name: name
            })
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                userHasAuthentificated= true;
                navigate('/home', { state: {name:name} });
            });

        if(userHasAuthentificated===false) {
            navigate('/')
        }
        }


    return(
        <div className={"container col-lg-6 col-md-8 col-ls-10 text-center position-absolute top-50 start-50 translate-middle"} id={"container__login"}>
            <div className={"login__intro"}>
                <h2>Welcome to ChatApp</h2>
                <em>If you want to start chatting, get logged in !</em>
            </div>

            <form onSubmit={handleSubmit} className={"login__form"}>
                <div>
                    <div className={"row"}>
                        <label htmlFor={"name"} className={"text-center"}> What is your name :</label>
                    </div>
                    <input type={"text"} value={name} onChange={(e) => setName(e.target.value)} autoFocus={true}/>
                </div>
                <button type={"submit"} value={"Register"} id={"login__button"} className={"btn btn-black"}>Login</button>
            </form>
        </div>
    )


}