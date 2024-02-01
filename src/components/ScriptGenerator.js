import React from "react";
import Loading from "./widgets/Loading";
import TextArea from "./widgets/TextArea";
import { GenerateScriptButton, ReadScriptButton, DownloadButton } from "./widgets/Buttons";
import "../styles/script-generator.scss";

function ResponseText(props) {
  if (props.text !== "") {
    return <div className="gpt-response">{props.text}</div>;
  }
}

function ScriptGenerator() {
  const [text, setText] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [downloadUrl, setDownloadUrl] = React.useState(null);

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
              <ReadScriptButton
                text={response}
                voice={"alloy"}
                handleLoading={handleLoading}
                handleDownloadUrl={setDownloadUrl}
              />
              <DownloadButton downloadUrl={downloadUrl} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScriptGenerator;
