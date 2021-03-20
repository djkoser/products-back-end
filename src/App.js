import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Display from './components/Display';
import Header from './components/Header';
import Searchbars from './components/Searchbars';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  getProducts = () => {};
  addProduct = () => {}; 
  deleteProduct = () => {}; 
  updateProduct = () => {}; 

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
