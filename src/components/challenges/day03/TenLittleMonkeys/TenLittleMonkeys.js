import React, {useState} from 'react';

const TenLittleMonkeys = () => {

    var divStyle = {
        "text-align": 'center',
        "font-weight": "bold",
        "color": "black",
        "background-image": 'url(./assets/monkeybg.jpg)',
        "width": "100vw",
        "height": "100vh"
      };

    const [monkeys, setMonkeys] = useState(10);

    const monkeyJumped = () => {
        (monkeys > 0) ? setMonkeys(monkeys - 1) : setMonkeys(monkeys);
    }

    const resetMonkeys = () => {
        setMonkeys(10);
    }

    return (
        <div style={divStyle}>
            <h2>Ten Little Monkeys Challenge</h2>

            {monkeys > 0 ? <p>{monkeys} little monkeys jumping on the bed. One fell off and bumped his head. Momma called the doctor and the doctor said, "No more monkeys jumping on the bed!"</p> : <p>There are no more monkeys jumping on the bed!</p>}
            
            {monkeys > 0 ? <button onClick={monkeyJumped}>Start Jumping</button> : <button onClick={resetMonkeys}>Reset Monkeys</button>}

        </div>
    );
};

export default TenLittleMonkeys;