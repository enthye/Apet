import React, {Component} from 'react';
import {Button, Table} from 'reactstrap';

export default class ApetTable extends Component {
    render() {
        // gets each col of information for each pet
        const list = this.props.pets.map(pet => {
            return (
                <tr key={pet.id}>
                    <td>{pet.id}</td>
                    <td>{pet.name}</td>
                    <td>{pet.hitpoints}</td>
                    <td><Button color="success"
                                onClick={() => this.props.feed(pet.id)}>
                        Feed</Button>
                        <Button color="warning">
                            Modify</Button>
                        <Button color="danger"
                                onClick={() => this.props.delete(pet.id)}>
                            Delete</Button>
                    </td>
                </tr>
            );
        });

        // returns table with each pet row defined above
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Pet Name</th>
                        <th>Hitpoints</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                        {list}
                    </tbody>

                </Table>
            </div>
        );
    }

    delete = (id) => {
        console.log(id);
        fetch(`/apet/delete?id=${id}`);
        let updatedPets = [...this.props.pets]
            .filter(i => i.id !== id);
        this.setState({pets: updatedPets});
    }
}