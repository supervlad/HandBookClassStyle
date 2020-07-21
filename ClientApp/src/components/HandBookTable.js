import React, { Component } from 'react';
import { HeaderTable } from './HeaderTable';
import { ItemList } from './ItemList';
import { PaginationBox } from './PaginationBox';

export class HandBookTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList: props.itemList
        };
        console.log('2', this.state);
    }

    addItem = (event, inputValue) => {
        event.preventDefault();

         if (inputValue !== '') {
             const itemList = this.state.itemList;
             const lastItem = itemList[itemList.length - 1];
             var lastId = lastItem.Id > 0 ? lastItem.Id : 0;
             itemList.push({ Id: lastId + 1, Text: inputValue })
             this.setState({ itemList: itemList })
        }
    }

    //removeItem = itemId => {
    //    console.log('event', itemId);
    //    const itemList = this.state.itemList;
    //    const items = itemList.filter(item => item.Id !== itemId);
    //    this.setState({ itemList: items });
    //    console.log('event', items);
    //}

    render() {
        return (
            <React.Fragment>
                <HeaderTable itemList={this.props.itemList} onAdd={this.addItem} onSearch={this.searchItem} />
                <ItemList itemList={this.props.itemList} />
                <PaginationBox />
            </React.Fragment>
        );
    }
}