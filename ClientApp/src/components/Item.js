import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export class Item extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextField variant="outlined" value={this.props.item.Text} onChange={this.props.onUpdate} />
                <Link href="#" onClick={() => this.props.onDelete(this.props.item.Id)}>
                    <DeleteForeverIcon />
                </Link>
            </div>
        );
    }
}