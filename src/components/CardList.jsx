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
    display: flex;
    height: 30px;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: #fff;
    background-color: ${({color}) => color};
`

const AddCardBtn = styled.div`
    cursor: pointer;

`;

const Move = styled.i`
    cursor: pointer;
`;

const MoveRight = styled(Move)`
    &:before {
        content: "\\03e";
    }
`;

const MoveLeft = styled(Move)`
    &:before {
        content: "\\003c";
    }
`;

class CardList extends Component {
    openAddPrompt = () => {
        const newCard = window.prompt('What text would you like?', '');
        this.props.addCard(newCard, this.props.id);
    }

    renderCards() {
        return this.props.cards.map((card, i) => {

            return (
                <Card key={`${i}-${card}`}>
                {i > 0 ? <MoveLeft /> : null}
                {card}
                {i < this.props.cards.length ? <MoveRight /> : null}
                </Card>
            );
        });
    }

    render() { 
        return (
            <ListContainer>
                <Header color={this.props.color}>{this.props.title}</Header>
                {this.renderCards()}
                <AddCardBtn onClick={this.openAddPrompt}> + Add Card </AddCardBtn>
            </ListContainer>
        );
    }
}
 
export default CardList;