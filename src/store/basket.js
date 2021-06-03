import MyBasket from "./mybasket";

const Basket = (props) => {
  return (
    <div className="Basket">
    {props.basket === 0 && <p>Aren't you finding your best beer match? Ask our staff for recommendation!</p>}
      <MyBasket 
        total={props.total} 
        basket={props.basket} />
    </div>
  );
}
export default Basket


