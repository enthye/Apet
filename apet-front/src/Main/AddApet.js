import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class AddApet extends Component {

    emptyFields = {
        name: "",
    }

    constructor(props) {
        super(props);
        this.state = this.emptyFields;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({name: value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const item = this.state;
        await fetch(`/apet/add?name=${item.name}`);
        this.props.history.push('/all');
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text"
                           name="name"
                           id="name"
                           defaultValue={''}
                           onChange={this.handleChange}
                           autoComplete="name"/>
                </FormGroup>

                <FormGroup>
                    <Button color="success" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/all">Cancel</Button>
                </FormGroup>
            </Form>
        );
    }
}