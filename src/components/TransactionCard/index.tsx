import React from 'react';

import {Container, Title, Amount, Body, Category, CategoryIcon, CategoryName, Date} from './styles';

export function TransactionCard(){
    return(
        <Container>
            <Title>Desenvolvimento de App</Title>
            <Amount>R$ 12.000,00</Amount>
            <Body>
                <Category>
                    <CategoryIcon/>
                    <CategoryName>Vendas</CategoryName>
                </Category>
                <Date>21/11/2021</Date>
            </Body>
        </Container>
    )
}