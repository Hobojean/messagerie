import React from "react";
import {useLocation} from "react-router-dom";

export default function Home() {
    const {state} = useLocation();
    const { name } = state; // Read values passed on state
    return(
        <>
            <h1>Let's talk {name}</h1>
        </>
    )
}