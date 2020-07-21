import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { HandBookTable } from './components/HandBookTable';

import './custom.css'

export default class App extends Component {

    static itemList = {
        HandBookName: 'Согласующие',
        AgreementType: [
            { Id: 1, Text: 'Директор' },
            { Id: 2, Text: 'Куратор' },
            { Id: 3, Text: 'Андеррайтер' },
            { Id: 4, Text: 'Сотрудник СБ' },
            { Id: 5, Text: 'Начальник Отдела' },
            { Id: 6, Text: 'Пользователь' }
        ]
    };

    constructor() {
        super();
        this.state = {
            HandBookName: App.itemList.HandBookName,
            itemList: App.itemList.AgreementType
        };
        console.log('1', this.state);
    }

  render () {
      return (
          <Container>
              <div>
                  <h1>{this.state.HandBookName}</h1>
              </div>
              <HandBookTable itemList={this.state.itemList} />
          </Container>
    );
  }
}
