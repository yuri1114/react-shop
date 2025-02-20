import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, increase } from "./../store/userSlice.js";
import { addCount, reduceCount, deleteItem } from "./../store.js";

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <p>
        {state.user.name}의 {state.user.age} 장바구니
      </p>
      <button
        onClick={() => {
          dispatch(increase(100));
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>상품 넘버</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <div className="btn-group">
                  <button
                    onClick={() => {
                      dispatch(addCount(state.cart[i].id));
                    }}
                    className="num-btn"
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(reduceCount(state.cart[i].id));
                    }}
                    className="num-btn"
                  >
                    -
                  </button>

                  <button
                    className="del-btn"
                    onClick={() => {
                      dispatch(deleteItem(state.cart[i].id));
                    }}
                  >
                    삭제
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Cart;
