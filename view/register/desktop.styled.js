import { Color, Typography } from 'components';
import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    margin: auto;
    height: fit-content;
`;

export const FormWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 407px;
    min-height: 480px;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 0 24px 24px 0;
    background-color: ${Color.background.light};
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
    flex-direction: column;
    width: 407px;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 24px 0 0 24px;
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
        display: flex;
        justify-content: center;
        margin-right: auto;
        ${Typography.Body2};
        color: ${Color.text.main};
        svg{
            margin-right: 8px;
        }
    }
`;