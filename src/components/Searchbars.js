import React, { Component } from 'react';

export default class Searchbars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idInput: "",
      nameInput: "",
      descriptionInput: "",
      priceInput: "",
      urlInput: ""
    };
  };

  handleChange = (value,stateName) => {
    this.setState({
      [stateName]:value
    });
  };

  clearInputs = () => {
    this.setState({
      idInput: "",
      nameInput: "",
      descriptionInput: "",
      priceInput: "",
      urlInput: ""
    });
  } 

  render() {
    const {idInput, nameInput, descriptionInput, priceInput, urlInput} = this.state; 
    const {getProducts, addProduct, deleteProduct, updateProduct} = this.props;
    return (
      <form className='searchBox'>
        <label htmlFor='idInput'>Product ID</label>
        <input id='idInput' type='text' value={idInput} onChange={(event)=> this.handleChange(event.target.value,"idInput")}/>
        <button id="searchButton" onClick={(event)=>{
          event.preventDefault();
          getProducts(idInput);
          this.clearInputs()}}>Search</button>
        <button id="deleteButton" onClick={(event)=>{
          event.preventDefault();
          deleteProduct(idInput)
          this.clearInputs()}}>Delete</button>
        <label htmlFor='nameInput'>Product Name</label>
        <input id='nameInput' type='text' value={nameInput} onChange={(event)=> this.handleChange(event.target.value,"nameInput")}/>
        <label htmlFor='descriptionInput'>Product Description</label>
        <input id='descriptionInput' type='text' value={descriptionInput} onChange={(event)=> this.handleChange(event.target.value,"descriptionInput")}/>
        <label htmlFor='priceInput'>Product Price</label>
        <input id='priceInput' type='text' value={priceInput} onChange={(event)=> this.handleChange(event.target.value,"priceInput")}/>
        <label htmlFor='urlInput'>Product Image URL</label>
        <input id='urlInput' type='text' value={urlInput} onChange={(event)=> this.handleChange(event.target.value,"urlInput")}/>
        <button id="addButton" onClick={(event)=>{
          event.preventDefault();
          addProduct(nameInput,descriptionInput,priceInput,urlInput)
          this.clearInputs()}}>Add</button>
        <button id="updateButton" onClick={(event)=>{
          event.preventDefault();
          updateProduct(idInput,descriptionInput)
          this.clearInputs()}}>Update</button>
      </form>
    );
  };
};