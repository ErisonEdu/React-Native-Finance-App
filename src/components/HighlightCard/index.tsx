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

export function HighlightCard () {
    return(
        <Container>
            <CardHeader>
                <Tittle>Entrada</Tittle>
                <CardTransactionIcon/>
            </CardHeader>
            <CardBody>
                <Amount>R$ 16.700,88</Amount>
                <LastTransaction>22/11/2021</LastTransaction>
            </CardBody>
        </Container>
    )
}