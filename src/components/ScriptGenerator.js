import React from "react";
import ChatGPT from "./ChatGPT";
import TextToSpeech from "./TextToSpeech";
import "../styles/script-generator.scss";
import Loading from "./Loading";

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

function ResponseText(props) {
    if (props.text !== "") {
        return <div className="gpt-response">{props.text}</div>;
    }
}

function GenerateScriptButton(props) {
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

function ReadScriptButton(props) {
  const processText = () => {
    TextToSpeech(props);
  };

  if (props.text !== "") {
    return (
      <button className="button" onClick={processText}>
        Read Text
      </button>
    );
  }
}

function ScriptGenerator() {
  const [text, setText] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleLoading = (value) => {
    setLoading(value);
  };

  const handleResponse = (event) => {
    setResponse(event);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  if (loading) {
    return (
      <div className="script-generator">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="script-generator">
        <div className="form">
          <div className="center">
            <TextArea text={text} handleParentTextChange={handleTextChange} />
            <GenerateScriptButton
              text={text}
              handleResponse={handleResponse}
              handleLoading={handleLoading}
            />
            <div className="bottom">
              <ResponseText text={response} />
              <ReadScriptButton text={response} voice={'alloy'} handleLoading={handleLoading} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScriptGenerator;
