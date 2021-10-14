import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from "reactstrap";
import Filtrados from './components/filtrados';
import { getAllContatos, criarContatos, editarContato, deletarContato } from './api'
import Footer from "./Footer"

const data = [];class App extends React.Component {
  state = {
    data: data,
    form: {
      id: "",
      email:"",
      telefone: ""
    }, 
    dataSearch: [],
    modalInserir: false,
    modalAtualizar: false,
    modalConfirmacao: false
  };

  

  handleChange = e =>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
      }
    })
  }
 
  //#região metodos de modales
  mostrarModalAtualizar = (valor) => {
    this.setState({
      form: valor,
      modalAtualizar: true,
    });
  };

  fecharModalAtualizar = () => {
    this.setState({ modalAtualizar: false })

  };

  mostrarModalInserir = () => {
    this.setState({
      modalInserir: true,
    });
  };

  fecharModalInserir = () => {
    this.setState({ modalInserir: false });
  };

  mostrarConfirmacao = (valor) => {
    this.setState({
      form: valor,
      modalConfirmacao: true
    });
    
  };

  fecharConfirmacao = () =>{
    this.setState({ modalConfirmacao: false });
  }
//#endregião
  
  //#região CRUD
  inserir = () =>{
    let valorNovo = this.state.form;
    criarContatos(valorNovo)
    this.obterDados ()
    
    /*valorNovo.id = this.state.data.length + 1;
    let lista = this.state.data;
    lista.push(valorNovo)
    this.setState({data: lista, modalInserir: false})*/
  }

  componentDidMount () {
    this.obterDados ()
  }

  obterDados = async() => {
    let contatos = await getAllContatos ()
    this.setState({data:contatos.data, modalInserir: false})
  }
  
  
  editar = (valor) =>{
    let contador = 0;

    let lista = (this.state.data);
    lista.map((registro)=>{
      if(valor.id === registro.id){
        lista[contador].nome = valor.nome;
        lista[contador].email = valor.email;
        lista[contador].telefone = valor.telefone;
      }
      contador++;
    });
    this.setState({data: lista, modalAtualizar: false})
  }



  apagar = (valor) =>{
    let contador = 0; 
    let lista = deletarContato(this.state.form.id);
    this.obterDados((registro) => {
        if(registro.id === valor.id){
          lista.splice(contador, 1);
        }
         contador++;
      });
      this.setState({data:[], lista, modalConfirmacao: false});
  }



  filtrar = (e) =>{
    const { value } = e.target;
    let lista = this.state.data;
    const filtered = lista.filter(fltr => fltr.nome.toLowerCase().includes(value.toLowerCase()));
    
    // this.setState({data: filtered});
    this.setState({ dataSearch: !value ?  [] : filtered});   
  }
  //#endregion

  render() {  
    return (
      <>    
        <nav className="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand">Lista de Contatos - <strong>Projeto React</strong></a>            
            <form  class="d-flex">
              <input class="form-control me-2" onChange={this.filtrar} type="search" placeholder="Procurar" aria-label="Search"></input>"         "
            </form>
            </div>
        </nav>        
          
        <Container>             
          <Filtrados 
            data = {this.state.dataSearch.length ? this.state.dataSearch : this.state.data}
            apagar = {this.mostrarConfirmacao}
            editar = {this.mostrarModalAtualizar}
          />   
          
          <br />
          <Button color="success" onClick={()=>this.mostrarModalInserir()}>Adicionar novo contato</Button>
          <br />
          <br/> 
        </Container>
        {/* Modal Inserir */}
        <Modal isOpen = {this.state.modalInserir}>
          <ModalHeader>
            <div>
              <h3>Adicionar contacto</h3>
            </div>       
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>id:</label> 
              <input className="form-control" readOnly type= "text" defaultValue = {this.state.data.length+1}/>
            </FormGroup> 

            <FormGroup>
              <label>Nome</label> 
              <input className="form-control" name="nome" type= "text" onChange={this.handleChange}/>
            </FormGroup> 

            <FormGroup>
              <label>Email</label> 
              <input className="form-control" name="email" type= "text" onChange={this.handleChange}/>
            </FormGroup> 

            <FormGroup>
              <label>Telefone</label> 
              <input className="form-control" name="telefone" type= "text" onChange={this.handleChange}/>
            </FormGroup> 
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.inserir()}>Adicionar</Button>
            <Button color="danger" onClick={() => this.fecharModalInserir()}>Cancelar</Button>
          </ModalFooter>
        </Modal>


        {/* Modal atualizar */}
        <Modal isOpen={this.state.modalAtualizar}>
          <ModalHeader>
            <div>
                <h3>Editar contato</h3>
            </div>       
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>id:</label> 
              <input className="form-control" readOnly type= "text" defaultValue={this.state.form.id}/>
            </FormGroup> 

            <FormGroup>
              <label>Nome</label> 
              <input className="form-control" name="nome" type= "text" onChange={this.handleChange} defaultValue={this.state.form.nome}/>
            </FormGroup> 

            <FormGroup>
              <label>Email</label> 
              <input className="form-control" name="email" type= "text" onChange={this.handleChange} defaultValue={this.state.form.email}/>
            </FormGroup> 

            <FormGroup>
              <label>Telefone</label> 
              <input className="form-control" name="telefone" type= "text" onChange={this.handleChange} defaultValue={this.state.form.telefone}/>
            </FormGroup> 
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={()=>this.editar(this.state.form)}>Salvar</Button>
            <Button color="danger" onClick={()=>this.fecharModalAtualizar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen = {this.state.modalConfirmacao}>
          <ModalHeader>
            <h4> Tem certeza que deseja apagar o contato? </h4>
          </ModalHeader>
          <ModalBody>
            <Button color="primary" onClick={()=> this.apagar(this.state.form)}> Sim</Button> {"   "}
            <Button color="danger" onClick={()=>this.fecharConfirmacao()}> Não</Button>
          </ModalBody>        
        </Modal>      
      </>
    );
  }
}

export default App;

