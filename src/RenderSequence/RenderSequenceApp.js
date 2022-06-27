import React, { Component } from 'react';
import ChildAppI from './ChildAppI';
import ChildAppII from './ChildAppII';


class RenderSequenceApp extends Component {
    constructor(props) {
        super(props);
        this.state = { renderChildApp1: false, renderChildAppII: false, mainPageRender: false };
    }

    componentDidMount() {
        console.log('componentDidMount: RenderSequenceApp.js has rendered.');
    }

    render() {
        console.log('Main Page Rendered.');
        return (
            <div style={{ padding: '3.5%', border: '1px solid black', backgroundColor: 'silver', margin: '1%' }}>
                <h1>MAIN RENDER SEQUENCE APP!!!</h1>
                <h3>Page Rendered: {this.state.mainPageRender ? 'true' : 'false'}.</h3>
                {
                    this.state.renderChildApp1 ?
                        <ChildAppI />
                        :
                        <h3>CLICK BUTTON BELOW TO RENDER CHILD APP 1.</h3>
                }

                <div style={{minHeight: '15px'}} />

                {
                    this.state.renderChildAppII ?
                        <ChildAppII />
                        :
                        <h3>CLICK BUTTON BELOW TO RENDER CHILD APP 2.</h3>
                }

                <div style={{minHeight: '15px'}} />

                <button onClick={() => this.setState({ ...this.state, renderChildApp1: !this.state.renderChildApp1 })}>
                    { this.state.renderChildApp1 ? <h1>Make Child App 1 disappear!!!</h1> : <h1>Make Child App 1 appear!!!</h1> } 
                </button> 

                <div style={{minHeight: '15px'}} />
                
                <button onClick={() => this.setState({ ...this.state, renderChildAppII: !this.state.renderChildAppII })}>
                    { this.state.renderChildAppII ? <h1>Make Child App II disappear!!!</h1> : <h1>Make Child App II appear!!!</h1> } 
                </button> 

                <div style={{minHeight: '15px'}} />

                <button onClick={() => this.setState({ mainPageRender: !this.state.mainPageRender })}>RE-RENDER MAIN PAGE.</button>
                
            </div>
        );
    }
}

export default RenderSequenceApp;