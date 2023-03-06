import React, { useState } from 'react';
import "./style.css";

const WrappedButton = () => {
  const [text, setText] = useState("Button");

  return (
    <div className="wrapper" style={{ "margin": "5px" }}>
      <button onClick={() => alert("Click")} className="btn">
        {text}
      </button>
    </div>
  )

}
// class WrappedButton extends React.Component {
//   state = {
//     text: "Click me!",
//   }

//   render() {
//     return (
//       <div className="wrapper" style={{ "margin": "5px" }}>
//         <button onClick={() => alert("Click")} className="btn">
//           {this.state.text}
//         </button>
//       </div>
//     )
//   }
// }

export default WrappedButton;
