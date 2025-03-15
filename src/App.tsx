const UserCard = ({
  name,
  age,
  email,
}: {
  name: string;
  age: number;
  email: string;
}) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Your age is {age}</p>
      <p>Your email is {email}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <UserCard name="Ali" age={25} email="ali34@gmail.com" />
    </div>
  );
};

export default App;
