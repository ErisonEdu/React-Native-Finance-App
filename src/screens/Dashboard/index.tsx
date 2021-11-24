import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import {TransactionCard, TransactionCardProps} from '../../components/TransactionCard'

import {
    Container, Header, UserWrapper,
    UserInfo, Photo, User,
    UserGreeting, UserName, PowerIcon,
    HighlightCards, Transactions, Title,
    TransactionList
} from './styles';

export interface DataListProps extends TransactionCardProps{
    id: string
}

export function Dashboard() {

    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: 'Desenvolvimento de App React Native',
            amount: 'R$ 29,333.66',
            category: {
                iconName: 'dollar-sign',
                name: 'vendas'
            },
            date: '23/11/2021'
        },
        {
            id: '2',
            type: 'positive',
            title: 'Desenvolvimento de App React Native',
            amount: 'R$ 99,333.66',
            category: {
                iconName: 'dollar-sign',
                name: 'vendas'
            },
            date: '23/11/2021'
        },
        {
            id: '3',
            type: 'negative',
            title: 'Internet',
            amount: 'R$ 29.00',
            category: {
                iconName: 'coffee',
                name: 'Consumo'
            },
            date: '23/11/2021'
        }
    ]

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
                    <TransactionList
                        data={data}
                        keyExtractor={ (item) => item.id}
                        renderItem={({item}) => <TransactionCard data={item}/>}
                    />
                </Transactions>
            </Container>
        </>
    )
}