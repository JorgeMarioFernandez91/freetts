import React from "react";

function TextArea(props) {
  var placeholder = "Enter text here";

  const handleChange = (event) => {
    props.handleParentTextChange(event);
  };

  return (
    <textarea
      type="text"
      rows="20"
      cols="50"
      placeholder={placeholder}
      value={props.text}
      onChange={handleChange}
    />
  );
}

export default TextArea;
