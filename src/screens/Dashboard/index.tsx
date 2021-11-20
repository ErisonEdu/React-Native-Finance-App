import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    PowerIcon,
    HighlightCards,
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
                    <HighlightCard/>
                    <HighlightCard/>
                    <HighlightCard/>
                </HighlightCards>
            </Container>
        </>
    )
}