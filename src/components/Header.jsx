import React from "react";
import './Header.css'
import HeaderSpotLogo from "../imgs/Spotify_Logo_CMYK_Green.png"

export default ()=>{
    return(
        <>
        <div className="header">
        <img className="header-logo" src={HeaderSpotLogo} alt="" />        

        </div>
        </>
    )
}