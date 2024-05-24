import React from "react";
import ReactDOM from "react-dom/client";
import Avatar from "./Avatar";

function App() {
  return (
    <>
      <Avatar src="./images/bob.jpg" alt="Bob Ziroll" />
      <br />
      <Avatar>BZ</Avatar>
      <br />
      <Avatar />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// ----------------inside avatar component-----------------
// ----- rendering different avatars based on props
export default function Avatar({ src, alt, children }) {
  if (src) {
    return (
      <div className="avatar">
        <img src={src} alt={alt}></img>
      </div>
    );
  }
  if (children) {
    return <div className="avatar">{children}</div>;
  } else {
    return <div className="avatar avatar-icon">{children}</div>;
  }
}

// -----------------button menu -------------
