import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Home() {
    document.title = "UberBooster"

    const [error, setError] = useState(null)
    const [verifieEmail, setVerifieEmail] = useState(false)
    const [verifiePwd, setVerifiePwd] = useState(false)
    const email = useRef(null)
    const password = useRef(null)
    const validateFields = (inputValue, type) => {
        switch (type) {
            case "text":
                const validEmail = /^[a-z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                //let emailVerification = inputValue.toLowerCase().match(validEmail) ? (setVerifieEmail(!verifieEmail), clearInvalidInput("#"+input.id,"#"+input.id+"Error")) : invalidInputError(msgError, "#"+input.id+"Error","#"+input.id);
                break;


            case "password":
                console.log("eeeee")
                break;
        
            default:
                break;
        }
    }
    const handleSubmit = e => {
        console.log(email.current.type)
        e.preventDefault()
        if (email.current.value.length >= 5 && email.current.value.length) {
            validateFields(email.current.value, email.current.type)
        }else{
            setError("Veuillez remplire tout les champs s'il vous plait")
        }
    }
    return(
        <main>
            <section>
                <article className="home-form">
                    <h2>Connexion</h2>
                    { error !== null ? <span className="errorMessage errorMessage--login">Veuillez remplire tout les champs s'il vous plait</span> : null }
                    <form method="post" onSubmit={handleSubmit} autoComplete="off">
                        <div className="home-form__container">
                            <label htmlFor="emailHome">Email</label>
                            <input type="text" name="email" className="home-form__input" id="emailHome" ref={email} />
                        </div>
                        <div className="home-form__container">
                            <label htmlFor="mdpHome">Mot de passe</label>
                            <input type="password" name="motDePasse" className="home-form__input" id="mdpHome" ref={password} />
                        </div>
                        <div className="submitConnexion">
                            <button className="home-form__button">Connection</button>
                        </div>
                    </form>
                    <span>Pas encore de compte ? <Link to="" className="link">Inscrivez-vous</Link></span>
                </article>
            </section>
        </main>
    )
}

export default Home