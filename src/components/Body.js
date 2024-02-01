import React from "react";
import ScriptReader from "./ScriptReader";
import BodyText from "./BodyText";
import ScriptGenerator from "./ScriptGenerator";
import DecideScriptNeeds from "./DecideScriptNeeds";
import Background from "./Background";
import "../styles/body.scss";

function Body() {
  const [userType, SetUserType] = React.useState(null);
  var component = null;

  if (userType === null) {
    component = <DecideScriptNeeds handleUserType={SetUserType} />;
  } else if (userType === "has-script") {
    component = <ScriptReader />;
  } else {
    component = <ScriptGenerator />;
  }

  return (
    <div className="body">
      <Background />
      <BodyText />
      {component}
    </div>
  );
}

export default Body;
