import React from "react";
import "../styles/decide-script-needs.scss";

/**
 * Decides and returns the view based on user input
 * @param {*} props 
 * @returns 
 */
function DecideScriptNeeds(props) {
  return (
    <div className="decide-script-needs">
      <div className="btn-1" onClick={() => props.handleUserType("has-script")}>
        I Have A Script
      </div>
      <div
        className="btn-2"
        onClick={() => props.handleUserType("needs-script")}
      >
        I Need Help Generating A Script
      </div>
    </div>
  );
}

export default DecideScriptNeeds;
