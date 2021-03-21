import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Display from './components/Display';
import Header from './components/Header';
import Searchbars from './components/Searchbars';
import { product } from 'prelude-ls';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.getProducts(); 
  }
// app.put('/api/products/:id', products_controller.update);
// app.post('/api/products', products_controller.create);

  getProducts = (id) => {
    if (!id) {
      axios.get('/api/products')
      .then(res=> this.setState({products:res.data}))
      .catch(err=> window.alert(err))
    } else {
      axios.get(`/api/products/${id}`)
      .then(res=> this.setState({products:res.data}))
      .catch(err=> window.alert(err))
    }
  };
  deleteProduct = (id) => {
    if (id) {
      axios.delete(`/api/products/${id}`)
      .then(res=> this.setState({products:res.data}))
      .catch(err=>window.alert(err))
    }
  }; 
  addProduct = (name,description,price,imageURL) => {
    let newProd={
      name:name,
      description:description,
      price:price,
      image_url:imageURL
    }; 
    axios.post('/api/products',newProd)
    .then(res=> this.setState({products:res.data}))
    .catch(err=>window.alert(err)); 
  }; 
  updateProduct = (id,description) => {
    axios.put(`/api/products/${id}?desc=${description}`)
    .then(res=> this.setState({products:res.data}))
    .catch(err=>window.alert(err)); 
  }; 

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Header />
        <Searchbars 
        getProducts={this.getProducts}
        addProduct={this.addProduct}
        deleteProduct={this.deleteProduct}
        updateProduct={this.updateProduct}/>
        <Display products={products}/>
      </div>
    )
  }
};
