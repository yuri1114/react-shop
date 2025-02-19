import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let findProduct = props.product.find(function (a) {
    return a.id == id;
  });

  return (
    <div className="item-card detail">
      <div className="card">
        <img src={"/product" + id + ".jpg"} />
      </div>
      <div className="text-wrap">
        <p className="product-title">{findProduct.id}</p>
        <p className="product-title">{findProduct.title}</p>
        <p className="product-des">{findProduct.content}</p>
        <p className="product-des">{findProduct.price}</p>
      </div>
      <button className="btn btn-danger">주문하기</button>
    </div>
  );
}

export default Detail;
