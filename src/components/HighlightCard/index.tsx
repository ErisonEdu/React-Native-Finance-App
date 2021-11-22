import React from 'react';

import {
    Container,
    CardHeader,
    Tittle,
    CardTransactionIcon,
    CardBody,
    Amount,
    LastTransaction,
} from './styles';

interface ICardProps {
    title: String;
    amount: String;
    lastTransaction: String;
    type: 'income' | 'outflow' | 'total';
}

const cardIconType = {
    income : 'arrow-up-circle',
    outflow : 'arrow-down-circle',
    total : 'dollar-sign'
}

export function HighlightCard ({
        title,
        amount,
        lastTransaction,
        type,
    }: ICardProps) {
    return(
        <Container type={type}>
            <CardHeader>
                <Tittle type={type}>
                    {title}
                </Tittle>
                <CardTransactionIcon 
                    name={cardIconType[type]}
                    type={type}
                />
            </CardHeader>
            
            <CardBody type={type}>
                <Amount type={type}>
                    {amount}
                </Amount>
                <LastTransaction type={type}>
                    {lastTransaction}
                </LastTransaction>
            </CardBody>
        </Container>
    )
}