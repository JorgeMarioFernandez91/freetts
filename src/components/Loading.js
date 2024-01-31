import React from 'react'
import '../styles/loading.scss'
import logo from "../assets/glyph-1.svg"

function Loading() {
    return (
        <div className="logo">
            <img id="gear" src={logo} alt='loading...'/>
        </div>
    );
}

export default Loading;