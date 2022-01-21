import Todo from "./conponents/todos/Todo";
import Modal from "./conponents/todos/modal/Modal";
import BackDrop from "./conponents/backdrop/BackDrop";


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Welcome to the world" />
      <Todo text="It's a free world" />
      <Todo text="You can be whatever you want" />
      <Todo text="Challenge yourself to something great" />
      <Todo text="Just do it" />
      <Modal />
      <BackDrop/>
    </div>
  );
}

export default App;
 