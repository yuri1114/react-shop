import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  let state = useSelector((state) => state);
  console.log(state.cart);
  return (
    <Table>
      <thead>
        <tr>
          <th>no</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {state.cart.map((a, i) => (
          <tr>
            <td>1</td>
            <td>{state.cart[i].name}</td>
            <td>{state.cart[i].count}</td>
            <td>
              <button className="btn btn-danger">+</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default Cart;
