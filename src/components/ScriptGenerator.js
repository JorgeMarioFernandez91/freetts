import React from "react";
import ChatGPT from "./ChatGPT";
import TextToSpeech from "./TextToSpeech";
import "../styles/script-generator.scss";

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

  if (props.text !== "") {
    return (
      <button className="button" onClick={processText}>
        Generate Script
      </button>
    );
  }
}

function ReadTextButton(props) {
  const processText = () => {
    TextToSpeech(props.text, "alloy");
  };

  if (props.text !== "") {
    return (
      <button className="button" onClick={processText}>
        Read Text
      </button>
    );
  }
}

function Bottom(props) {
  return (
    <div className="bottom">
      <div className="gpt-response"> {props.response}</div>
      <ReadTextButton text={props.response} />
    </div>
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
    <div className="script-generator">
      <div className="form">
        <div className="center">
          <TextArea text={text} handleParentTextChange={handleTextChange} />
          <Button text={text} handleResponse={handleResponse} />
        </div>
      </div>
      <Bottom response={response} />
    </div>
  );
}

export default ScriptGenerator;
