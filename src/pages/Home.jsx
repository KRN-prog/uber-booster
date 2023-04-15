import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Home() {
    document.title = "UberBooster"

    const [switchForm, setSwitchForm] = useState(false)
    const [errorLogin, setErrorLogin] = useState(null)
    const [errorSignIn, setErrorSignIn] = useState(null)
    const [verifieEmail, setVerifieEmail] = useState(false)
    const [verifiePwd, setVerifiePwd] = useState(false)

    /* ========== Constantes de connexion ========== */
    const [logValues, setLogValues] = useState({})

    /* ========== Constantes de d'inscription ========== */
    const [signValues, setSignValues] = useState({})
    const firstNameSignIn = useRef(null)


    const validateFields = (inputValue, type) => {
        switch (type) {
            case "text":
                let textVerification = inputValue.length
                break;


            case "email":
                const validEmail = /^[a-z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                let emailVerification = inputValue.toLowerCase().match(validEmail) ? (setVerifieEmail(!verifieEmail), inputValue = "", setErrorLogin(null)) : setErrorLogin("Veuillez entrer une addresse email valide s'il vous plaît.");
                break;


            case "password":
                let passwordVerification = inputValue.length >= 5 ? (setVerifiePwd(!verifiePwd), inputValue = "", setErrorLogin(null)) : setErrorLogin("Veuillez entrer un mot de passe valide s'il vous plaît.")
                break;
        
            default:
                break;
        }
    }
    const handleSubmitLog = e => {
        e.preventDefault()
        if (Object.keys(logValues).length === 2 && logValues.email && logValues.motDePasse) {
            validateFields(logValues.email, "email")
            validateFields(logValues.motDePasse, "password")
        }else{
            setErrorLogin("Veuillez remplir tous les champs s'il vous plaît.")
        }
    }

    const handleSubmitRegister = e => {
        e.preventDefault()
        if (Object.keys(signValues).length === 6) {
            validateFields(firstNameSignIn.current.value, firstNameSignIn.current.type)
        }else{
            setErrorSignIn("Veuillez remplir tous les champs s'il vous plaît.")
        }
    }
    return(
        <main>
            <section>
                {switchForm === false ? (
                    <article className="home-form logApparition">
                        <h2>Connexion</h2>
                        { errorLogin ? (<span className="errorMessage errorMessage--login">{errorLogin}</span>) : null }
                        <form method="post" onSubmit={handleSubmitLog} autoComplete="off">
                            <div className="home-form__container">
                                <label htmlFor="emailHome">Email</label>
                                <input type="email" name="email" className="home-form__input" id="emailHome" onChange={(e) => setLogValues({...logValues, [e.target.name]: e.target.value})} />
                            </div>
                            <div className="home-form__container">
                                <label htmlFor="mdpHome">Mot de passe</label>
                                <input type="password" name="motDePasse" className="home-form__input" id="mdpHome" onChange={(e) => setLogValues({...logValues, [e.target.name]: e.target.value})} />
                            </div>
                            <div className="submitConnexion">
                                <button className="home-form__button">Connection</button>
                            </div>
                        </form>
                        <span>Pas encore de compte ? <span className="link" onClick={() => setSwitchForm(!switchForm)}>Inscrivez-vous</span></span>
                    </article>
                ) : (
                    <article className="home-form signInApparition">
                        <h2>Inscription</h2>
                        { errorSignIn ? (<span className="errorMessage errorMessage--login">{errorSignIn}</span>) : null }
                        <form method="post" onSubmit={handleSubmitRegister} autoComplete="off">
                            <div className="home-form__container doubleInputForm">
                                <div className="doubleInputForm__inputContainer">
                                    <label htmlFor="firstNameHome">Nom</label>
                                    <input type="text" name="firstName" className="home-form__input" id="firstNameHome" onChange={(e) => setSignValues({...signValues, [e.target.name]: e.target.value})} />
                                </div>

                                <div className="doubleInputForm__inputContainer">
                                    <label htmlFor="lastNameHome">Prénom</label>
                                    <input type="text" name="lastName" className="home-form__input" id="lastNameHome" onChange={(e) => setSignValues({...signValues, [e.target.name]: e.target.value})} />
                                </div>
                            </div>
                            <div className="home-form__container">
                                <label htmlFor="emailSignInHome">Email</label>
                                <input type="text" name="emailSignIn" className="home-form__input" id="emailSignInHome" onChange={(e) => setSignValues({...signValues, [e.target.name]: e.target.value})} />
                            </div>
                            <div className="home-form__container">
                                <label htmlFor="emailConfirmSignInHome">Confirmer l'email</label>
                                <input type="text" name="emailConfirmSignIn" className="home-form__input" id="emailConfirmSignInHome" onChange={(e) => setSignValues({...signValues, [e.target.name]: e.target.value})} />
                            </div>
                            <div className="home-form__container doubleInputForm">
                                <div className="doubleInputForm__inputContainer">
                                    <label htmlFor="mdpSignInHome">Mot de passe</label>
                                    <input type="password" name="motDePasseSignIn" className="home-form__input" id="mdpSignInHome" onChange={(e) => setSignValues({...signValues, [e.target.name]: e.target.value})} />
                                </div>

                                <div className="doubleInputForm__inputContainer">
                                    <label htmlFor="confirmMdp">confirmer</label>
                                    <input type="password" name="confirmMdp" className="home-form__input" id="confirmMdp" onChange={(e) => setSignValues({...signValues, [e.target.name]: e.target.value})} />
                                </div>
                            </div>
                            <div className="submitConnexion">
                                <button className="home-form__button">Inscription</button>
                            </div>
                        </form>
                        <span>Déjà un compte ? <span className="link" onClick={() => setSwitchForm(!switchForm)}>Connectez-vous</span></span>
                    </article>
                )}
            </section>
        </main>
    )
}

export default Home