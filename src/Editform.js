import React, { useState,useEffect } from "react";

const Editform
 = props => {
  const initForm = { id: null, name: "", username: "" };

  const [user, setUser] = useState(initForm);
  useEffect(()=>{
    setUser(props.current);
  },[props])

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
 
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      props.updateUser(user.id, user)
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
      <button>Add new user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  );
};

export default Editform
;
