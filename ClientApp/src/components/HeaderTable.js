import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';


export class HeaderTable extends Component {

    constructor(props) {
        super(props);
        this.inputValue = '';
        this.direction = 1;
        this.state = {
            itemList: props.itemList
        };
        console.log('3', this.state);
    }

    setInputValue = value => {
        this.inputValue = value;
    }

    //addItem = event => {
    //    event.preventDefault();

    //    if (this.inputValue !== '') {
    //        const itemList = this.state.itemList;
    //        const lastItem = itemList[itemList.length - 1];
    //        var lastId = lastItem > 0 ? lastId = lastItem.Id : lastId = 0;
    //        itemList.push({ Id: lastId + 1, Text: this.inputValue })
    //        this.setState({ itemList: itemList });
    //    }

    //    console.log(this.inputValue);

    //    this.setState({ itemList: [...this.state.itemList, { Id: Math.random(), Text: this.inputValue }] }, () => console.log('state', this.state));
    //}

    searchItem = value => {
        if (value !== '') {
            const itemList = this.state.itemList;
            const filteredList = itemList.filter(item => {
                return item.Text.toLowerCase().includes(value.toLowerCase());
            });
            console.log('searchItem', filteredList);
            this.setState({ itemList: filteredList });

            
        }
    } 

    sortItem = () => {
        const itemList = this.state.itemList;
        const sortedList = itemList.sort((a, b) => {
            return a.Text > b.Text ? this.direction : this.direction * -1;
        });
        this.setState({ itemList: sortedList });
        this.direction = (-1) * this.direction;
    }

    render() {
        return (
            <React.Fragment>
                <TextField variant="outlined" label="Фильтр" variant="filled" onChange={e => this.searchItem(e.target.value)} style={{ display: 'inline-block', marginRight: '15px' }} />
                <form onSubmit={event => this.props.onAdd(event, this.inputValue)} style={{ display: 'inline-block', marginRight: '15px' }}>
                    <TextField variant="outlined" variant="filled" onBlur={event => this.setInputValue(event.target.value)} />
                    <Button variant="contained" color="primary" type="submit">Добавить</Button>
                </form>
                <Button variant="contained" color="secondary" onClick={this.sortItem} >Сортировка</Button>
                <Box style={{ clear: 'both' }}></Box>
                <Divider style={{ margin: '10px 0 10px 0' }} />
            </React.Fragment>
        );
    }
}