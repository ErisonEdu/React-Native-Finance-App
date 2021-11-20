import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ArrowUpCircle } from 'react-native-feather';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};

    width: ${RFValue(300)}px;
    border-radius: ${RFValue(7)}px;

    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-left: 10px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Tittle = styled.Text`
    font-family: ${({theme}) => theme.font.Regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text_dark};
`;

export const CardTransactionIcon = styled(ArrowUpCircle).attrs({
    width: '40px',
    height: '40px'
})`
    color: ${({theme}) => theme.colors.text_dark};
`;

export const CardBody = styled.View`

`;

export const Amount = styled.Text`
    font-family: ${({theme}) => theme.font.Medium};
    font-size: ${RFValue(32)}px;

    color: ${({theme}) => theme.colors.text_dark};

    margin-top: 38px;
`;

export const LastTransaction = styled.Text`
    font-family: ${({theme}) => theme.font.Regular};
    font-size: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.text_dark};
`;
