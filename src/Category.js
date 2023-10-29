import React, { Component } from 'react';
import { ListGroup,ListGroupItem } from 'reactstrap';

export default class Category extends Component {
  constructor(props){
    super(props);
    this.state={categories:[],

  }
}

componentDidMount(){
  this.getCategories()
}

getCategories=()=>{
  fetch("http://localhost:3000/categories")
  .then(response=>response.json())
  .then(data=>this.setState({categories:data}))
}



  render() {
    return (
      <div>
        <h1>{this.props.title.titleOne}</h1>

        <ListGroup>
          {
            this.state.categories.map(category=>(
              <ListGroupItem active={category.categoryName===this.props.currentCategory}
              onClick={()=>this.props.changeCategory(category)}
              key={category.id} >{category.categoryName}</ListGroupItem>
              ))
          }
  
    
  
</ListGroup>
<h2>{this.props.currentCategory}</h2>
      </div>
    )
  }
}
