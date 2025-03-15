const Greeting = ({ name }: { name: string }) => {
  return <h2>Hello, {name}</h2>;
};

function Age({ age }: { age: number }) {
  return <p>Your age is {age}</p>;
}

function Status({ isOnline }: { isOnline: boolean }) {
  return <p>Status: {isOnline ? "Online" : "Offline"}</p>;
}

const UserInfo = ({
  name,
  age,
  isOnline,
}: {
  name: string;
  age: number;
  isOnline: boolean;
}) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p style={{ backgroundColor: isOnline ? "green" : "transparent" }}>
        Status: {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

const ShoppingList = ({ items }: { items: string[] }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const Profile = ({ user }: { user: { name: string; age: number } }) => {
  return (
    <div>
      <h3>Name: {user.name}</h3>
      <p>Age: {user.age}</p>
    </div>
  );
};

const Button = ({ onClick }: { onClick: () => void }) => {
  return <button onClick={onClick}>Click Me!</button>;
};

const App = () => {
  const userData = { name: "Milad Khojaste", age: 35 };

  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <hr />
      <Greeting name="Mehdi" />
      <Age age={34} />
      <Status isOnline />
      <Status isOnline={false} />
      <UserInfo name="Ali" age={24} isOnline={true} />
      <UserInfo name="Sara" age={24} isOnline={false} />
      <hr />
      <ShoppingList items={["Apple", "Banana", "Orange"]} />
      <hr />
      <Profile user={userData} />
      <hr />
      <Button onClick={handleClick} />
    </div>
  );
};

export default App;
