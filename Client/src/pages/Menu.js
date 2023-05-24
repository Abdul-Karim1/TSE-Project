import React, { Component } from 'react';
import Card from '../components/Card';
import '../styles/Menu.css';
import axios from '../axios';

class Menu extends Component {
  /*this class initially sets state of product to null when user uploads some product it will chnage products value
   also tells if product is successfully added or not*/
  constructor(props) {
    //initial state set set=null
    super(props);
    this.state = {
      products: '', //empty string
    };
  }

  componentDidMount() {
    //funtion, when product is uploaded it will be added in string. Data is fetched through fetch data
    this.fetchData();
  }

  fetchData = () => {
    //arrow func, when a new product will be added by user, fetch data will tell express server about the new product so that it can add it too*/
    axios

      .get('/products/get')
      .then((response) => {
        if (response.status === 200) {
          /*if successfully fetched product then initial state that is null, 
            will be changed with data stored in string otherwise it will through an error*/
          this.setState({ products: response.data });
        } else {
          throw new Error('Invalid response');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { products } = this.state;

    return (
      <div className="menu">
        <h1 className="menuTitle">Available Options</h1>
        <div className="menuList">
          {products &&
            products.map((product) => (
              <Card
                key={product._id}
                image={product.imageURL}
                id={product._id}
                price={product.price}
                title={product.title}
              />
            ))}
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Menu;
