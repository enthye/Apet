import React, { Component } from 'react';
import ApetNavbar from './ApetNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

export default class ApetHome extends Component {
    render() {
        return (
            <div>
                <ApetNavbar/>
                <Container fluid>
                    <Button color="link"><Link to="/all">See your Apets</Link></Button>
                </Container>
            </div>
        );
    }
}