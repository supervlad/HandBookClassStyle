import React, { Component } from 'react';
import { Item } from './Item';
import { Context } from './Context';

export class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList: props.itemList
        };
    }

    removeItem = itemId => {
        const items = this.state.itemList.filter(item => item.Id !== itemId);
        this.setState({ itemList: items });
    }

    updateItem = (id, e) => {
        const itemList = this.state.itemList;
        const index = this.state.itemList.findIndex((item) => { return item.Id === id });
        const item = itemList.map(el => el.Id === id);
        item.Text = e.target.value;
        itemList[index] = item;
        this.setState({ itemList: itemList });
    }

    render() {
        return (
            <div>
                {this.state.itemList.map((item, index) => (<Item key={index} item={item} onDelete={this.removeItem.bind(this, item.Id)} onUpdate={this.updateItem.bind(this, item.Id)} />))}
            </div>
        );
    }
}