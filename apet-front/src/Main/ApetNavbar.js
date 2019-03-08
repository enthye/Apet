import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import github from "../resources/github32.png";

export default class ApetNavbar extends Component {
    render() {
        return (
        <Navbar className="navbar navbar-dark bg-dark">
            <NavbarBrand style={{color: 'white'}}
                         href="/all">Apet</NavbarBrand>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="https://github.com/enthye">
                    <img src={github}/>
                </a></li>
            </ul>
        </Navbar>
        )
    }
}