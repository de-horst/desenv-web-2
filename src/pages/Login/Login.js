import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import firebase from 'firebase/app';




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.authUser = this.authUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleEmail(e) {
        this.setState({ email: e.target.value })
    }

    handlePassword(e) {
        this.setState({ password: e.target.value })
    }

    authUser() {
        let accessAccepted = 'Login realizado com sucesso!';
        let accessDenied = 'Usuário ou senha inválidos!';

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(userCredential => {
            try {
                const user = userCredential.user;
                console.log(userCredential)
                if (user !== null) {
                    this.setState({ message: accessAccepted });
                    window.location.href = '/home'
                } else {
                    this.setState({ message: accessDenied });
                }
            }
            catch (error) {
                let errorCode = error.code
                let errorMessage = error.message
                console.log(errorMessage)
                console.log(errorCode)
            }
        })
    }

    render() {
        return (
            <div className='box_login'>

                <form onSubmit={this.handleSubmit}>
                    <h2>Login</h2>

                    <div className="inputBox">
                        <input type="email"
                        value={this.state.email} onChange={this.handleEmail} 
                        required />
                        <span>Email</span>
                        <i></i>
                    </div>

                    <div className="inputBox">
                        <input type="password"
                        value={this.state.password} onChange={this.handlePassword}
                        required />
                        <span>Senha</span>
                        <i></i>
                    </div>

                    <div className='links'>
                        <Link to='/cadastrar'>Cadastre-se</Link>
                    </div>

                    <button type='submit'
                    onClick={this.authUser}
                    className='btn'>Acessar</button>
                </form>

                <h2>{this.state.message}</h2>
            </div>
        )
    }
}

export default Login;
