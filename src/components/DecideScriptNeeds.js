import React from "react";
import "../styles/decide-script-needs.scss";

/**
 * Decides and returns the view based on user input
 * @param {*} props
 * @returns
 */
function DecideScriptNeeds(props) {
  const handleUserType = (type) => {
    props.handleUserType(type);
  };

  return (
    <div className="decide-script-needs">
      <div className="btn-1" onClick={() => handleUserType("has-script")}>
        I Have A Script
      </div>
      <div className="btn-2" onClick={() => handleUserType("needs-script")}>
        I Need Help Generating A Script
      </div>
    </div>
  );
}

export default DecideScriptNeeds;
