import { useNavigate } from "react-router-dom";

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
export default ItemCard;
