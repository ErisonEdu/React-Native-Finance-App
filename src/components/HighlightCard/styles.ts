import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Feather'

interface iCardTransactionIcon {
    type: 'income'| 'outflow' | 'total'
}

export const Container = styled.View<iCardTransactionIcon>`
    background-color: ${({theme, type}) =>
        type === 'total' ?
        theme.colors.success:
        theme.colors.shape};

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

export const Tittle = styled.Text<iCardTransactionIcon>`
    font-family: ${({theme}) => theme.font.Regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme, type}) =>
        type === 'total' ?
        theme.colors.shape:
        theme.colors.text_dark};
`;

export const CardTransactionIcon = styled(Icon).attrs({
    size : 40,
})<iCardTransactionIcon>`
    color: ${({theme}) => theme.colors.text_dark};

    ${(props) => props.type === 'income' && css`
        color: ${({theme}) => theme.colors.success}
    `};

    ${(props) => props.type === 'outflow' && css`
        color: ${({theme}) => theme.colors.attention}
    `};

    ${(props) => props.type === 'total' && css`
        color: ${({theme}) => theme.colors.golden}
    `};
`;

export const CardBody = styled.View<iCardTransactionIcon>`
    background-color: ${({theme, type}) =>
        type === 'outflow' ?
        theme.colors.attention_light:
        theme.colors.success_light
    };
    border-radius: 7px;
`;

export const Amount = styled.Text<iCardTransactionIcon>`
    font-family: ${({theme}) => theme.font.Medium};
    font-size: ${RFValue(32)}px;
    margin-top: 38px;

    color: ${({theme, type}) =>
        type === 'total' ?
        theme.colors.shape:
        theme.colors.text_dark};

`;

export const LastTransaction = styled.Text<iCardTransactionIcon>`
    font-family: ${({theme}) => theme.font.Regular};
    font-size: ${RFValue(12)}px;
    color: ${({theme, type}) =>
        type === 'total' ?
        theme.colors.shape:
        theme.colors.text};
`;
