const UserStatus = ({ isOnline }: { isOnline: boolean }) => {
  return <p>User is {isOnline ? "Online" : "Offline"}</p>;
};

const App = () => {
  return (
    <div>
      <UserStatus isOnline />
      <UserStatus isOnline={false} />
    </div>
  );
};

export default App;
