import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'

function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: "",
    title: "",
    imageURL: "",
    price: 0,
  });

  const addProduct = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("imageURL", product.imageURL);
    data.append("product", JSON.stringify(product));

    fetch("http://localhost:5000/products/add", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    navigate('/menu')
  };
  return (
    <Container>
      <FormContainer>
        <h3>Add Product</h3>
        <InputContainer>
          <p>Phone Number</p>
          <input
            type="text"
            onChange={(e) =>
              setProduct({ ...product, id: e.target.value })
            }
            value={product.id}
          />
        </InputContainer>
        <InputContainer>
          <p>Title</p>
          <input
            type="text"
            onChange={(e) =>
              setProduct({ ...product, title: e.target.value })
            }
            value={product.title}
          />
        </InputContainer>
        <InputContainer>
          <p>Upload Image</p>
          <input
            type="file"
            name="imageURL"
            onChange={(e) =>
              setProduct({ ...product, imageURL: e.target.files[0] })
            }
          />
        </InputContainer>
        <InputContainer>
          <p>Price</p>
          <input
            type="number"
            onChange={(e) =>
              setProduct({ ...product, price: e.target.value })
            }
            value={product.price}
          />
        </InputContainer>
        <Button onClick={addProduct}>Add Product</Button>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;

    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;
  }
`;

const Button = styled.button`
  width: 70%;
  height: 35px;
  background-color: #121619;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default AddProduct;
