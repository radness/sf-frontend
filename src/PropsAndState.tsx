import React, {useEffect, useState} from 'react';
import {Button} from "./component/Button";
import {Label} from "./component/Label";
import axios from "axios";

const PropsAndState = () => {
    const [count, setCount] = useState(0);
    const [lotInfo, setLotInfo] = useState({});

    const sub = () => {
        setCount(count - 1);
    }

    const add = () => {
        setCount(count + 1);
    }

    // const getData = async () => {
    //     const {data} = await axios.get('http://localhost:8080/v3/wip/lots');
    //     setLotInfo(data); // 서버로부터 fetching 한 data 를 useState 의 state 로 set 한다.
    // };

    useEffect(() => {
        // effect 구에 생성한 함수를 넣어서 실행한다.
        // getData();
    });

    console.log(lotInfo);

    return (
        <div>
            <Button onClick={sub} label={'-'}/>
            <Label data={count}/>
            <Button onClick={add} label={'+'}/>
        </div>
    );
};

export default PropsAndState;