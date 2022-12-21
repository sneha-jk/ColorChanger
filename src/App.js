import React from "react";
import "./styles.css";

const App = () => {
  const options = [
    {
      label: "Lime",
      value: "lime"
    },

    { label: "Lavender", value: "lavender" },

    {
      label: "Alice Blue",
      value: "aliceblue"
    },

    { label: "Darkblue", value: "darkblue" },

    { label: "Teal", value: "teal" },

    { label: "Ghost White", value: "ghostwhite" }
  ];

  const [value, setValue] = React.useState("lime");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "serif" }}>
        {" "}
        Color changer
      </h1>
      <select
        value={value}
        onChange={handleChange}
        style={{ backgroundColor: value, width: 400, borderRadius: 2 }}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>

      <div
        style={{
          marginTop: 100,
          marginLeft: 200,
          width: 350,
          height: 150,
          backgroundColor: value,
          borderRadius: 5,
          borderColor: "black"
        }}
      />
    </div>
  );
};

export default App;
