import React from "react";
import './Main.css'
import SpotLogo from "../imgs/spotify-logo-transparent-spotify-logo-images-25.png"
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export default ()=>{
    return(
       <>
       <div className="main-area">
            <div className="info-area">
                <img className="main-logo" src={SpotLogo} alt="spotfly-logo" />
                <div className="description-area">
                    <div className="funcionalities">
                        <div className="func">
                     
                        {/* <AccessibilityNewIcon></AccessibilityNewIcon> */}
            
                        <span>Multi-Plataforma</span>
                        </div>
                        <div className="func">
                        {/* <img src="" alt="playlists personalizadas" /> */}
                        <span>Playlists Personalizadas</span>
                        </div>
                        <div className="func">
                        {/* <img src="" alt="offline" /> */}
                        <span>Escute mesmo sem conexão de dados</span>
                        </div>
                    </div>
                    <span className="secondary-span">Escute Suas Músicas Preferidas Em Qualquer Lugar !</span>
                </div>
            </div>
            <form className="form">
                <h2>Prencha Seus Dados</h2>
                <p className="form-subtitle"> e receba as playlists que estão bombando no momento !</p>
               <div className="input-area">
                    <label htmlFor="nome">Nome</label>
                    <input className="input" id ='nome' type="text" placeholder="Seu nome" />
                    <label htmlFor="email">Email</label>
                    <input className="input" id ='email' type="email" placeholder="seuemail@email.com" />
                    <label htmlFor="telphone">Telefone</label>
                    <input className="input" id ='telphone' type="tel" placeholder="(00) 00000-0000" />
                    <label htmlFor="verification">1+1?</label>
                    <input className="input" id="verification" type="text" />
               </div>
                <button className="submit" >QUERO RECEBER AS PLAYLISTS MAIS TOPS DO MOMENTO !</button>
            </form>
       </div>
       </>
    )
}