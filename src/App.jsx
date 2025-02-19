import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import data from "./data.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Detail from "./pages/Detail.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  let [product, setProduct] = useState(data);
  let [more, setMore] = useState(0);

  const navigate = useNavigate(); //hook

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            href="#home"
            onClick={() => {
              navigate("/");
            }}
          >
            Fabric Poster
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#about"
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>

            <Nav.Link
              href="#cart"
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* nested routes */}
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/detail/:id" element={<Detail product={product} />} />
        <Route path="*" element={<div>없는페이지입니다</div>} />
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );

  function Main() {
    return (
      <div className="inner-wrap">
        <div className="main-bg"></div>

        <div className="product-content">
          {product.map(function (a, i) {
            return <ItemCard key={a.id} product={product[i]} i={i}></ItemCard>;
          })}
        </div>

        <div className="btn-wrap">
          <button
            className="filter-btn"
            onClick={() => {
              let copy = [...product];
              copy.sort((a, b) => a.title.localeCompare(b.title)); // 🔹 title 기준 정렬
              setProduct(copy);
            }}
          >
            가나다 정렬
          </button>
          <button className="more-btn" onClick={() => {}}>
            더보기
          </button>
        </div>
      </div>
    );
  }

  function ItemCard(props) {
    const navigate = useNavigate();

    return (
      <div
        className="item-card"
        onClick={() => {
          navigate(`/detail/${props.product.id}`);
        }}
      >
        <div className="card">
          <img src={"/product" + props.product.id + ".jpg"} />
        </div>
        <div className="text-wrap">
          <p className="product-title">{props.product.id}</p>
          <p className="product-title">{props.product.title}</p>
          <p className="product-des">{props.product.content}</p>
          <p className="product-des">{props.product.price}</p>
        </div>
      </div>
    );
  }
}

export default App;
