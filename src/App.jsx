import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import data from "./data.js";
import "./App.css";

function App() {
  let [product] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fabric Poster</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home </Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div className="product-content">
        {product.map(function (a, i) {
          return (
            <ItemCard
              product={product[i]}
              i={i}
            ></ItemCard>
          );
        })}
      </div>
    </div>
  );

  function ItemCard(props) {
    return (
      <div className="item-card">
        <div className="card">
          <img src={"/product0" + props.i + ".jpg"} />
        </div>
        <div className="text-wrap">
          <p className="product-title">{props.product.title}</p>
          <p className="product-des">{props.product.content}</p>
          <p className="product-des">{props.product.price}</p>
        </div>
      </div>
    );
  }
}

export default App;
