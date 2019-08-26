import React, { useState } from "react";

const Form = props => {
  const initForm = { id: null, name: "", username: "" };

  const [user, setUser] = useState(initForm);
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initForm);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <button className="btn btn-success">Add new user</button>
    </form>
  );
};

export default Form;