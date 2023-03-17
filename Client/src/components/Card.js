import React from "react";
import styled from "styled-components";
import axios from "axios"
import { useNavigate } from 'react-router-dom'
function Card({ id, image, title, price }) {
  const navigate = useNavigate();
  let serverImg = image ? image.startsWith("images") : false;
  if (serverImg) {
    let url = image.slice(7);
    image = `http://localhost:5000/${url}`;
  }

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/products/delete/${id}`)
    navigate('/')
  }

  return (
    <Container>
      <Image>
        <img src={image} alt="" />
      </Image>
      <Description>
        <h5>{title}</h5>
        <p>PKR {price}</p>
        <button>Exchange Now</button>
        <br></br>
        <button onClick={handleDelete}>Delete Listing</button>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 15px;
  margin: 20px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;
const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  img {
    width: 180px;
    height: 200px;
  }
`;

const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-weight: 600;
  }
  button {
    width: 100%;
    height: 33px;
    color: white;
    background-color: #121619;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card;
