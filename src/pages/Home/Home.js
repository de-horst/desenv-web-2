import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dados: [],
            userid: '',
            email: '',
            message: ''
        }

        this.getUsers = this.getUsers.bind(this);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    userid: user.userid,
                    email: user.email
                })
                this.state.email = user.email
                this.state.userid = user.userid
            }
        })
    }

    getUsers() {
        firebase.firestore().collection('usuarios').get().then((item) => {
            const state = this.state;

            item.forEach(element => {
                state.dados.push({
                    id: element.id,
                    nome: element.data().nome,
                    sobrenome: element.data().sobrenome,
                    email: element.data().email,
                    dataNascimento: element.data().dataNascimento
                });
            });
            this.setState(state)
        })
    };


    render() {
        return (
            <>
                <div className='box'>
                    <div className="home">
                        <h2>Usuários</h2>
                        <button
                            className='btn center'
                            onClick={this.getUsers}>Lista</button>

                        {
                            this.state.dados.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div className="listBox">
                                            <h4>ID:</h4> <span className='span'> {item.id}</span>
                                            <i></i>
                                        </div>

                                        <div className="listBox">
                                            <h4>Nome:</h4> <span className='span'> {item.nome}</span>
                                            <i></i>
                                        </div>

                                        <div className="listBox">
                                            <h4>Sobrenome:</h4> <span className='span'> {item.sobrenome}</span>
                                            <i></i>
                                        </div>

                                        <div className="listBox">
                                            <h4>Email:</h4> <span className='span'> {item.email}</span>
                                            <i></i>
                                        </div>

                                        <div className="listBox">
                                            <h4>Data de Nascimento:</h4> <span className='span'> {item.dataNascimento}</span>
                                            <i></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Home;
