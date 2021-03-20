import { product } from 'prelude-ls';
import React, { Component } from 'react';

export default class Searchbars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexInput: 0,
      productInput: "",
      nameInput: "",
      descriptionInput: "",
      priceInput: 0
    };
  };

  handleChange(value,stateName) {
    this.setState({
      [stateName]:value
    });
  };

  render() {
    const {indexInput, productInput, nameInput, descriptionInput, priceInput} = this.state; 
    const {getProducts, addProduct, deleteProduct, updateProduct} = this.props;
    return (
      <form className='searchBox'>
        <label htmlFor='IndexInput'>Index</label>
        <input id='indexInput' type='text' value={indexInput} onChange={(event)=> this.handleChange(event.target.value,"indexInput")}/>
        <label htmlFor='productInput'>Index</label>
        <input id='productInput' type='text' value={productInput} onChange={(event)=> this.handleChange(event.target.value,"productInput")}/>
        <label htmlFor='nameInput'>Index</label>
        <input id='nameInput' type='text' value={nameInput} onChange={(event)=> this.handleChange(event.target.value,"nameInput")}/>
        <label htmlFor='IndexInput'>Index</label>
        <input id='descriptionInput' type='text' value={descriptionInput} onChange={(event)=> this.handleChange(event.target.value,"descriptionInput")}/>
        <label htmlFor='priceInput'>Index</label>
        <input id='priceInput' type='text' value={priceInput} onChange={(event)=> this.handleChange(event.target.value,"priceInput")}/>
        <button id="searchButton" onClick={()=>getProducts()}>Search</button>
        <button id="addButton" onClick={()=>addProduct()}>Add</button>
        <button id="deleteButton" onClick={()=>deleteProduct()}>Delete</button>
        <button id="updateButton" onClick={()=>updateProduct()}>Update</button>
      </form>
    );
  };
};