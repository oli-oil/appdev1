import React, { useState } from "react";

const ToggleButton = () => {
    const [isOn, isOff] = useState(false);

    return (
        <div>
            <h2>{ isOn ? 'The Button is ON' : 'The Button is OFF' } </h2>
            <button onClick={() => isOff (!isOn)}> Toggle</button>
        </div>
    );
};

export default ToggleButton
