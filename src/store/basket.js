import MyBasket from "./mybasket";

const Basket = (props) => {
  return (
    <div className="Basket">
      <MyBasket basket={props.basket} />
    </div>
  );
}
export default Basket


