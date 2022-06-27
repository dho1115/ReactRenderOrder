import React, { useState, useEffect, createRef } from 'react'

const ChildAppII = (props) => {
    const [childAppIIState, setChildAppIIState] = useState({name: ''});
    const cityRef = createRef();

    function changeChildApp2State() {
        setChildAppIIState(prvName => prvName.name == "AJ Scott" ? {...prvName, name: 'Jane Doe'} : {...prvName, name: 'AJ Scott'});
        console.log(childAppIIState);
    }

    function changeCityRef() {
        cityRef.current = 'Los Angeles';
        console.log({ cityRef });
    }

    useEffect(() => {
        console.log('Inside useEffect: ChildAppII has rendered.')
        return () => {
            
        };
    }, []);

    return (
        <div style={{ border: '3px solid maroon', backgroundColor: 'yellow', padding: '3%' }}>
            <h1 style={{color: 'red'}}>childAppII</h1>
            <h3>STATE: {JSON.stringify(childAppIIState)}.</h3>
            <div style={{minHeight: '15px'}} />

            <button onClick={changeCityRef}><h1>changeCityRef</h1></button>
            <hr />
            <button onClick={changeChildApp2State}><h1>change ChildAppIIState</h1></button>
        </div>
    )
}

export default ChildAppII

