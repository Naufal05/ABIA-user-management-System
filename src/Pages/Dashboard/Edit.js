import React, { useState } from "react";
import Swal from "sweetalert2";

const Edit = ({ users, selectedUser, setUsers, setIsEditing }) => {
  const id = selectedUser.id;

  const [firstName, setFirstName] = useState(selectedUser.firstName);
  const [lastName, setLastName] = useState(selectedUser.lastName);
  const [email, setEmail] = useState(selectedUser.email);
  const [dob, setDob] = useState(selectedUser.dob);
  const [location, setLocation] = useState(selectedUser.location);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !dob || !location) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const user = {
      id,
      firstName,
      lastName,
      email,
      dob,
      location,
    };

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users.splice(i, 1, user);
        break;
      }
    }

    setUsers(users);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${user.firstName} ${user.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit user</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="dob">DoB</label>
        <input
          id="dob"
          type="date"
          name="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
