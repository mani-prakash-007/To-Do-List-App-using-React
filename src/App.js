import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
import { useState } from "react";

function App() {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("To-do-list"))
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const addItem = (item) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, task: item };
    const listItem = [...tasks, addNewItem];
    setTask(listItem);
    localStorage.setItem("To-do-list", JSON.stringify(listItem));
  };

  function handleTick(id) {
    const newTasks = tasks.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTask(newTasks);
  }

  const handleDelete = (id) => {
    const notInTrash = tasks.filter((item) => item.id !== id);
    const inTrash = tasks.filter((item) => item.id === id);
    setTask(notInTrash);
    localStorage.setItem("To-do-list", JSON.stringify(inTrash));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const date = new Date();

  return (
    <div className="App">
      <Header title="iMan Codes" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search search={search} setSearch={setSearch} />
      <Content
        tasks={tasks.filter((item) =>
          item.task.toLowerCase().includes(search.toLocaleLowerCase())
        )}
        handleTick={handleTick}
        handleDelete={handleDelete}
      />
      <Footer tasks={tasks.length} date={date.getFullYear()} />
    </div>
  );
}

export default App;
