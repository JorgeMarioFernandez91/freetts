import React from "react";
import ChatGPT from "./ChatGPT";

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

function Button(props) {
  const processText = () => {
    ChatGPT(props);
  };

  return (
    <button className="button" onClick={processText}>
      Generate Script
    </button>
  );
}

function ScriptGenerator() {
  const [text, setText] = React.useState("");

  const [response, setResponse] = React.useState("");

  const handleResponse = (event) => {
    setResponse(event);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="form">
        <div className="left"></div>
        <div className="center">
          <TextArea text={text} handleParentTextChange={handleTextChange} />
          <Button text={text} handleResponse={handleResponse} />
        </div>
      </div>
      {response}
    </div>
  );
}

export default ScriptGenerator;
