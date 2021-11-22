import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import  Icon  from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    flex:1;
    background-color: ${
        ({ theme }) => theme.colors.background
    };
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;

    background-color: ${({theme}) => theme.colors.primary};

    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    flex-direction:row;

    width: 100%;
    padding: 0 24px;
    margin-top: ${RFValue(20)}px;
    justify-content: space-between;
`;

export const UserInfo  = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo  = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const User  = styled.View`
    padding-left: 16px;
`;

export const UserGreeting  = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.font.Regular};
`;

export const UserName  = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.font.Bold};
`;

export const PowerIcon = styled(Icon).attrs({
    name: 'power'
})`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal:24},
})`
    position: absolute;
    padding-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;

    padding-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text_dark};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.font.Regular};
    margin-bottom: 16px;
`;