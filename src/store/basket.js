import MyBasket from "./mybasket";

const Basket = (props) => {
  return (
    <div className="Basket">
      <MyBasket total={props.total} basket={props.basket} />
    </div>
  );
};
export default Basket;
