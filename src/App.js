import React, {Component} from "react";
import Navbaar from "./Navbaar";
import Category from "./Category";
import Products from "./Products";
import {Row,Col} from "reactstrap";
import alertify from "alertifyjs";
import NotFound from "./NotFound";
import {Route,Routes} from "react-router-dom";
import CartList from "./CartList";
import Login from "./Login";
import Register from "./Register";


export default class App extends Component {

  state={currentCategory:"i",products:[], cart:[]}

  changeCategory=(category)=>{
    this.setState({currentCategory:category.categoryName})
    this.getProducts(category.id)
  }

  componentDidMount(){
    this.getProducts()
    
  }
  getProducts=(categoryId)=>{

    let url ="http://localhost:3000/products";
    if(categoryId){
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({products:data}))
    

  }

  addToCard=(product)=>{
    let newCart=this.state.cart;
    let addedItem=newCart.find(c=>c.product.id===product.id);
    if(addedItem){
      addedItem.quantity+=1
    }
    else{
      newCart.push({product:product,quantity:1})

    }
    this.setState({cart:newCart})
    alertify.success(product.productName + "added to cart")
    

  }

  removeFromCart=(product)=>{
    let newCart=this.state.cart.filter(c=>c.product.id!==product.id);
    this.setState({cart:newCart});
    alertify.error(product.productName + "removed from cart")
  }
  

  
  render(){
    let collection={titleOne:"Category", titleTwo:"Product"}
    return(
      <div>
      
       
      <Navbaar removeFromCart={this.removeFromCart} cart={this.state.cart}/>
      

      <Row>

        <Col xs="3">
      <Category title={collection} changeCategory={this.changeCategory} currentCategory={this.state.currentCategory}  />
      </Col>

      <Col>
      <Routes>

        <Route exact path="/" element={<Products title={collection} currentCategory={this.state.currentCategory} products={this.state.products} addToCard={this.addToCard}/>} />  
        <Route exact path="/cart" element={<CartList increaseQuantity={this.increaseQuantity} cart={this.state.cart} removeFromCart={this.removeFromCart}/>} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
      
      </Col>
      </Row>
      
      
    </div>
      
    )
  }


}
  
  

