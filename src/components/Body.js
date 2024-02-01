import React from 'react'
import ScriptReader from './ScriptReader'
import '../styles/body.scss'
import BodyText from './BodyText'
import ScriptGenerator from './ScriptGenerator'
import DecideScriptNeeds from './DecideScriptNeeds'

function Body() {
    const [userType, SetUserType] = React.useState(null)
    var component = null;

    if (userType === null) {
        component = <DecideScriptNeeds handleUserType={SetUserType}/>;
    }
    else if (userType === "has-script"){
        component = <ScriptReader />;
    }
    else {
        component = <ScriptGenerator />;
    }

    return (
        <div className="body">
            <BodyText />
            {component}
        </div>
    )
}

export default Body