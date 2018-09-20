import React from 'react';

const characters = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '2px solid black',
        textAlign: 'center'
    };

    return (
        <div style={style} onClick={props.clicked}>
            {props.char}
        </div>
    );
};

export default characters;