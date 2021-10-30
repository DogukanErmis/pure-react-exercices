import React, {useEffect, useState} from 'react';
import * as ReactDOM from "react-dom";

const LogEffect = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('latest value:', text);
    });

    return (<input value={text} onChange={e => setText(e.target.value)}/>);
};


ReactDOM.render(
    <React.StrictMode>
        <LogEffect/>
    </React.StrictMode>,
    document.getElementById('root')
);

