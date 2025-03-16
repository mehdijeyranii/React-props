import { useState } from "react";

interface UserProps {
  name: string;
  age: number;
  city: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<UserProps>({
    name: "Ali",
    age: 25,
    city: "Tehran",
  });

  const changeName = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: "Mehdi",
    }));
  };

  const increaseAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  const changeCity = (newCity: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      city: newCity,
    }));
  };

  return (
    <div>
      <h2>User information</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <hr />
      <button onClick={changeName}>Change Name</button>
      <button onClick={increaseAge}>Increasing Age</button>
      <button onClick={() => changeCity("Shiraz")}>
        Change the city of Shiraz
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default App;
