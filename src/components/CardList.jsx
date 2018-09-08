import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';

const ListContainer = styled.div`
    display: flex;
    flex: 1;
    margin-right: 25px;
    flex-direction: column;
`;

const Header = styled.div`
    height: 30px;
    width: 100%;
    justify-content: center;
    color: #fff;
    background-color: ${({color}) => color};
`

const AddCardBtn = styled.button`

`;

class CardList extends Component {
    openAddPrompt = () => {
        const newCard = window.prompt('What text would you like?', '');
        this.props.addCard(newCard, this.props.id);
    }

    render() { 
        return (
            <ListContainer>
                <Header color={this.props.color}>{this.props.title}</Header>
                {this.props.cards.map((card, i) => <Card text={card} key={`${i}-${card}`}/>)}
                <AddCardBtn onClick={this.openAddPrompt}/>            
            </ListContainer>
        );
    }
}
 
export default CardList;