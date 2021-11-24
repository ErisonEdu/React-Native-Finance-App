import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Feather'

interface TransactionCardListProps {
    type: 'positive' | 'negative'
}

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
    padding: 17px 24px;
    margin-bottom: 16px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.font.Regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text_dark};
`;

export const Amount = styled.Text<TransactionCardListProps>`
    font-family: ${({theme}) => theme.font.Regular};
    font-size: ${RFValue(20)}px;
    color: ${({theme, type}) =>
    type === 'positive' ?
    theme.colors.success:
    theme.colors.attention};
    margin-top: 2px;
`;

export const Body = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
`;

export const Category = styled.View`
    flex-direction: row;
    align-items:center;
`;

export const CategoryIcon = styled(Icon)`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
`;

export const CategoryName = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
    margin-left: 17px;
`;

export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
`;

