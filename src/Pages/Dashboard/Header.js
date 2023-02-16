import React from "react";

const Header = ({ setIsAdding }) => {
  return (
    <header>
      <h1>ABIA User Management Page</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Button
        </button>
      </div>
    </header>
  );
};

export default Header;
