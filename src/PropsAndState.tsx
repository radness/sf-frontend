import React, {useState} from 'react';
import {Button} from "./component/Button";
import {Label} from "./component/Label";

const PropsAndState = () => {
    const [count, setCount] = useState(0);

    const sub = () => {
        setCount(count - 1);
    }

    const add = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <Button onClick={sub} label={'-'}/>
            <Label data={count}/>
            <Button onClick={add} label={'+'}/>
        </div>
    );
};

export default PropsAndState;