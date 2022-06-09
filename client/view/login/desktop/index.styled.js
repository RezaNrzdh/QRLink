import { Color, Typography } from 'components';
import styled from 'styled-components';

export const Background = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url('/images/bg.svg');
    background-position: top center;
    background-repeat: repeat-y;
`;

export const FormWrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 88px;
    width: 50%;
    padding-left: 20%;
    box-sizing: border-box;

    @media (max-width: 1280px) {
        padding-left: 18%;
    }
    @media (max-width: 1194px) {
        padding-left: 13%;
    }
    @media (max-width: 1024px) {
        padding-left: 10%;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;
    h1{
        color: ${Color.text.main};
        ${Typography.Headline6};
        margin-bottom: 8px;
    }
    label{
        color: ${Color.text.main};
        ${Typography.Body2};
    }
`;

export const ForgetPassword = styled.div`
    display: flex;
    margin-bottom: 24px;
    input{}
    label{
        ${Typography.Body2};
    }
    .link{
        margin-right: auto;
        ${Typography.Caption};
    }
`;

export const DoNotRegisterYet = styled.div`
    display: flex;
    margin-top: 24px;
    ${Typography.Caption};
    label{
        color: ${Color.text.light};
        margin-left: 4px;
    }
`;

export const HeroWrapper = styled.section`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: 50%;
    margin-top: 88px;
    padding-right: 64px;
    background-color: ${Color.primary.light};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    .logo{
        display: flex;
        width: 160px;
        height: 30px;
        cursor: pointer;
        svg{
            fill: ${Color.text.main}
        }
    }
    .return{
        margin-right: auto;
        ${Typography.Body2};
        color: ${Color.text.main};
    }
`;