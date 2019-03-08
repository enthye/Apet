import React, {Component} from 'react';
import ApetTable from './ApetTable';
import ApetNavbar from './ApetNavbar';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class PetsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {pets: []};
    }

    // get all pet data from database via Spring controller
    async componentDidMount() {
        const response = await fetch('/apet/all');
        const body = await response.json();
        this.setState({pets: body});
    }

    delete = (id) => {
        fetch(`/apet/delete?id=${id}`);
        let updatedPets = [...this.state.pets]
            .filter(i => i.id !== id);
        this.setState({pets: updatedPets});
    }

    render() {
        const {pets} = this.state;
        return (
            <div>
                {/* header navbar */}
                <ApetNavbar/>
                <Button color="success"
                        tag={Link}
                        to={"/add"}>Add</Button>{' '}
                {/* body table display */}
                <ApetTable pets={pets}
                           delete={this.delete}
                           feed={this.feed}/>
            </div>
        );
    }
}