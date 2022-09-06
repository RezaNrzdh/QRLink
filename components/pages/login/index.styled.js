import styled from 'styled-components';
import { Color } from 'constants/color';
import { Typography } from 'constants/typography';

export const Container = styled.section`
    display: flex;
    margin: auto;
    height: fit-content;
`;

export const FormWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 407px;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 24px;
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