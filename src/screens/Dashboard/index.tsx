import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import {TransactionCard} from '../../components/TransactionCard'

import {
    Container, Header, UserWrapper,
    UserInfo, Photo, User,
    UserGreeting, UserName, PowerIcon,
    HighlightCards, Transactions, Title, 
} from './styles';

export function Dashboard() {
    return(
        <>
            <Container>
                <Header>
                    <UserWrapper>
                        <UserInfo>
                            <Photo source={{uri:'https://avatars.githubusercontent.com/u/25579326?v=4'}}/>
                            
                            <User>
                                <UserGreeting>Nice To See U Again,</UserGreeting>
                                <UserName>Erison</UserName>
                            </User>
                        </UserInfo>
                        <PowerIcon/>
                    </UserWrapper>
                </Header>
                <HighlightCards>
                    <HighlightCard
                        type='income'
                        title='Entradas'
                        amount='R$ 25.997,88'
                        lastTransaction='Ultima entrada dia 22/11/2021'
                    />
                    <HighlightCard
                        type='outflow'
                        title='Saida'
                        amount='R$ - 100,88'
                        lastTransaction='Ultima entrada dia 22/11/2021'
                    />
                    <HighlightCard
                        type='total'
                        title='Tatal'
                        amount='= R$ 25.897,00'
                        lastTransaction='Ultima entrada dia 22/11/2021'
                    />
                </HighlightCards>
                <Transactions>
                    <Title>Listagem</Title>
                    <TransactionCard/>
                </Transactions>
            </Container>
        </>
    )
}