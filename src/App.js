import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import Editform from "./Editform";

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ];
  const initForm = { id: null, name: "", username: "" };
  const [users, setUsers] = useState(usersData);
  const [current, setCurrent] = useState(initForm);
  const [editing, setEditing] = useState(false);
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id));
  };

  const editRow = user => {
    setEditing(true);
    setCurrent({ id: user.id, name: user.name, username: user.username });
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="row">
          <div className="col-md-6">
            {editing ? (
              <div>
                <h2>Edit user</h2>
                <Editform
                  editing={editing}
                  setEditing={setEditing}
                  current={current}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <Form addUser={addUser} />
              </div>
            )}
          </div>
          <div className="col-md-6">
            <h2>View users</h2>
            <List users={users} editRow={editRow} deleteUser={deleteUser} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
