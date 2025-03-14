const Greeting = ({ name }: { name: string }) => {
  return <h2>Hello, {name}</h2>;
};

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <hr />
      <Greeting name="Mehdi"/>
    </div>
  );
};

export default App;
