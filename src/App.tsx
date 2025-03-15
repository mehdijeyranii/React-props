const TodoList = ({ tasks }: { tasks: string[] }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <TodoList
        tasks={["Buy groceries", "Complete project", "Go for a walk"]}
      />
    </div>
  );
};

export default App;
