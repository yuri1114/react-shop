import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { addItem } from "./../store.js";
import { useDispatch } from "react-redux";

function Detail(props) {
  let { id } = useParams();
  let findProduct = props.product.find(function (a) {
    return a.id == id;
  });
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  let dispatch = useDispatch();
  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  return (
    <div className="inner-content">
      <div className="item-card detail">
        {/* {alert == true ? (
          <div className="alert alert-warning">2초 이내 구매시 할인</div>
        ) : null} */}

        <div className="card">
          <img src={"/product" + id + ".jpg"} />
        </div>
        <div className="text-wrap">
          <p className="product-title">{findProduct.id}</p>
          <p className="product-title">{findProduct.title}</p>
          <p className="product-des">{findProduct.content}</p>
          <p className="product-des">{findProduct.price}</p>

          <button
            onClick={() => {
              dispatch(
                addItem({
                  id: findProduct.id,
                  name: findProduct.title,
                  count: 1,
                })
              );
            }}
            className="btn btn-danger"
          >
            주문하기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0" className="nav-bar">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} product={props.product} />
    </div>
  );
}

function TabContent({ tab, product }) {
  let [fade, setFade] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`start + ${fade}`}>
      {
        [
          <div className="tab _01">{product[0].title}</div>,
          <div className="tab _02">내용2</div>,
          <div className="tab _03">내용3</div>,
        ][tab]
      }
    </div>
  );
}
export default Detail;
