import React, { useState } from "react";

// function UseStateComponent() {
//   const [count, setCount] = useState(0);
//   //   const handleMinus = () => {
//   //     if (count > 0) {
//   //       setCount(count - 1);
//   //     }
//   //   };
//   //   const handlePlus = () => {
//   //     setCount(count + 1);
//   //   };
//   return (
//     <div className="UseState">
//       <button
//         className="minus"
//         onClick={() => {
//           if (count === 0) {
//             setCount(0);
//           } else {
//             setCount(count - 1);
//           }
//         }}
//       >
//         minus
//       </button>
//       <p>{count}</p>
//       <button className="plus" onClick={() => setCount(count + 1)}>
//         plus
//       </button>
//     </div>
//   );
// }

// export default UseStateComponent;

function UseStateComponent1() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username" // Specify the 'name' attribute
          placeholder="Username"
          value={formData.username}
          onChange={handleInput}
        />
        <input
          type="email"
          name="email" // Specify the 'name' attribute
          placeholder="Email"
          value={formData.email}
          onChange={handleInput}
        />
        <input
          type="password"
          name="password" // Specify the 'name' attribute
          placeholder="Password"
          value={formData.password}
          onChange={handleInput}
        />
        <button type="submit">Register</button>
      </form>
      <h2>
        This is {formData.username} and this is {formData.email}
      </h2>
    </div>
  );
}

export default UseStateComponent1;
