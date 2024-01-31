import React from 'react'
import Form from './Form'
import '../styles/body.scss'
import DecideScriptNeeds from './DecideScriptNeeds'
import BodyText from './BodyText'

function Body() {
    const [userType, SetUserType] = React.useState(null)
    var component = null;

    if (userType === null) {
        component = <DecideScriptNeeds handleUserType={SetUserType}/>;
    }
    else if (userType === "needs-script") {
        component = '';
    }
    else {
        component = <Form />;
    }

    return (
        <div className="body">
            <BodyText />
            {component}
        </div>
    )
}

export default Body