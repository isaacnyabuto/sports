import { useState } from "react";

const main = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState("zozo");

    return (
        <div>
            <p>You clicked {name} times</p>
            <button onClick={() => setName(name + 4)}>
                Click me
            </button>
        </div>
    )
}
export default main;