import React from "react";
import "../styles/header.scss";
function Header(props) {
  const handleLoading = () => {
    props.handleLoading(true);
  };

  return (
    <div className="header">
      <h1 onClick={handleLoading}>TTS Engine</h1>
      <h2>Free Text To Speech</h2>
    </div>
  );
}

export default Header;
