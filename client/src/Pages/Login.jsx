import React from 'react'
import '../CSS/Login.css'
const Login = () => {
    return (
        <>
            <div className="container-login">
                <div className="login">
                    <div className="content">
                        <img src="./logo.png" alt="" />
                    </div>
                    <div className="wraper">
                        <form>

                            <h1 className="title text-4xl text-center">S'indentifier</h1>
                            <div className="input-box">
                                <input
                                    aria-describedby="emailHelp"
                                    type="email" required

                                />
                                <label for="name">Votre adresse Email</label>
                                <ion-icon name="person"></ion-icon>
                            </div>

                            <div className="input-box">
                                <input

                                />
                                <label for="name">Votre Mot de Passe</label>
                                <ion-icon name="lock-closed"></ion-icon>
                            </div>
                            <div className="text-red-500 mb-1" role="alert">
                                { }
                            </div>
                            <button type="submit" className="btn">
                                Se connecter
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login