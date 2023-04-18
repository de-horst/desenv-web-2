import React, { Component } from 'react';
import firebase from '../../Firebase';




class Cadastrar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      email: '',
      dataNascimento: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUser = this.addUser.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  addUser() {
    let accessAccepted = 'Cadastro realizado com sucesso!';
    try {
      firebase.firestore().collection('usuarios').add({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        email: this.state.email,
        password: this.state.password,
        dataNascimento: this.state.dataNascimento
      }).then(this.createUser).then(() => {
        this.setState({ message: accessAccepted })
        setTimeout(() => {
          window.location.href = '/'
        }, 1000)
      })
    }
    catch (error) {
      let errorCode = error.code
      let errorMessage = error.message
      console.log(errorMessage)
      console.log(errorCode)
    }
  }

  createUser(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className='box'>
        <form onSubmit={this.handleSubmit}>
          <h2>Cadastro</h2>

          <div className="inputBox">
            <input type="text"
              onChange={(e) => this.setState({ nome: e.target.value })} required />
            <span>Nome</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="text"
              onChange={(e) => this.setState({ sobrenome: e.target.value })}
              required />
            <span>Sobrenome</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="date"
              onChange={(e) => this.setState({ dataNascimento: e.target.value })}
              required />
            <span>Data de Aniversário</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              required />
            <span>Email</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="password"
              onChange={(e) => this.setState({ password: e.target.value })}
              required />
            <span>Senha</span>
            <i></i>
          </div>

          <button className='btn'
            onClick={this.addUser}
            type='submit'
          >Cadastrar</button>

        </form>
        <h2> {this.state.message} </h2>
      </div>
    )

  }
}

export default Cadastrar;
