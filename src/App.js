import React, { Component } from 'react';
// import styled from 'styled-components';
import mockData from './data/mockData';

import CardList from './components/CardList';
import MainContainer from './containers/MainContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: mockData
    };
  }

  addNewCard = (newText, listIndex) => {
    this.setState((prevState) => {
      const newState = {...prevState};
      newState.List[listIndex].cards.push(newText);
      return newState;
    });
  }

  moveCard = (listIndexFrom, listIndexTo, cardIndexToMove) => {
    this.setState(prevState => {
      const newList = [...prevState.List];
      
      const cardToMove = newList[listIndexFrom].cards[cardIndexToMove];
      
      const newListFrom = newList[listIndexFrom].cards.slice(cardIndexToMove);
      const newListTo = newList[listIndexFrom].cards.push(cardToMove);
      
      newList[listIndexFrom].cards = newListFrom;
      newList[listIndexTo].cards = newListTo;

      return {
        List: newList
      };
    })
  }

  render() {
    return (
      <MainContainer>
        {this.state.List.map((list, i) => {
          return <CardList key={`${i}-${list.title}`} {...list} id={i} addCard={this.addNewCard} moveCard={this.moveCard}/>
        })}
      </MainContainer>
    );
  }
}

export default App;
