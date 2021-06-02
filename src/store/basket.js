import MyBasket from "./mybasket";

const Basket = (props) => {
  return (
    <div className="Basket">
    {props.basket === 0 && <p>Aren't you finding your best beer match? Ask our staff for recommendation!</p>}
      <MyBasket basket={props.basket} />
      {/* <div>
      <h2>Total</h2>
      <h1>{props.total}</h1></div> */}
    </div>
  );
}
export default Basket


