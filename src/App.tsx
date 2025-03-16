interface Props {
  title: string;
  price: number;
  inStock: boolean;
}

const ProductCard = (props: Props) => {
  const { title, price, inStock } = props;

  return (
    <div>
      <h2>Product: {title}</h2>
      <p>Price: ${price}</p>
      <p>Status: {inStock ? "Available" : "Out of Stock"}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ProductCard title="Laptop" price={1200} inStock={true} />
      <ProductCard title="Headphone" price={500} inStock={false} />
    </div>
  );
};

export default App;
