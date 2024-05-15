import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
function JumbotronComponent(props) {
    return (
        <div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>{props.children}</p>
                <p><Button variant="danger">Learn more</Button></p>
            </Jumbotron>
        </div>
    );
}
export default JumbotronComponent;