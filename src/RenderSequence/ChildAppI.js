import React, { useState, useEffect, useRef } from 'react';

const ChildAppI = (props) => {
    const [childAppIState, setChildAppIState] = useState({ name: '' });
    const nameRef = useRef('No Name Given.');

    useEffect(() => {
        console.log('Inside useEffect: ChildAppI has rendered.')
        return () => {
            
        };
    }, []);

    useEffect(() => {
        console.log({nameRefCurrent: nameRef.current});

        return () => {
            
        }
    }, [nameRef.current]);

    function changeNameRef() {
        nameRef.current = nameRef.current == "The New Name is Brea!!!" ? "The New Name is Jamie!!!" : "The New Name is Brea!!!";
        console.log({ nameRef });
    }

    function changeChildApp1State() {
        setChildAppIState(prvName => prvName.name == "Jamie Smith" ? {...prvName, name: 'Lonnie Williams'} : {...prvName, name: 'Jamie Smith'});
        console.log(childAppIState);
    }

    console.log("Outside UseEffect: ChildAppI has rendered")
    return (
        <div style={{ border: '3px solid olive', backgroundColor: 'moccasin', padding: '3%' }}>
            <h1 style={{ color: 'red' }}>childAppI.</h1>
            <h3>STATE: {JSON.stringify(childAppIState)}</h3>
            <div style={{ minHeight: '15px' }} />
            <button onClick={ changeNameRef }><h1>Change nameRef</h1></button>
            <hr />
            <button onClick={ changeChildApp1State }><h1>change ChildApp1State</h1></button>
        </div>
    )
}

export default ChildAppI
