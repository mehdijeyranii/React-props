const Greeting = ({ name }: { name: string }) => {
  return <h2>Hello, {name}</h2>;
};

function Age({ age }: { age: number }) {
  return <p>Your age is {age}</p>;
}

function Status({ isOnline }: { isOnline: boolean }) {
  return <p>Status: {isOnline ? "Online" : "Offline"}</p>;
}

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <hr />
      <Greeting name="Mehdi" />
      <Age age={34} />
      <Status isOnline />
      <Status isOnline={false} />
    </div>
  );
};

export default App;
