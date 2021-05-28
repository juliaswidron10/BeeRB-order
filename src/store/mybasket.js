

export default function MyBasket({ basket }) {
  return (
    <section className="MyBasket">

      <ul>
        {basket.map((item) => (
          <CartItem
            name={item.name}
            category={item.category}
            amount={item.amount}
            key={item.label}
          />
        ))}
      </ul>
    </section>
  );
}
//<CartItem name={item.name} amount={item.amount} />
//<CartItem {...item} />
function CartItem(props) {
  return (
    <li>
      {props.amount} {props.name} {props.category}
    </li>
  );
}