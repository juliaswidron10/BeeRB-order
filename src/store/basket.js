import MyBasket from "./mybasket";
// import CheckoutForm from "./CheckoutForm";
const Basket = (props) => {
  return (
    <aside className="Basket">
      <MyBasket basket={props.basket} />
      {/* {props.basket.length > 0 ? <CheckoutForm /> : <p>But more stuff</p>} */}
    </aside>
  );
}
export default Basket