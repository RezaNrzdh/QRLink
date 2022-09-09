import { Typography } from 'constants/typography';
import {Color} from 'constants/color';
import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 407px;
    height: fit-content;
    box-sizing: border-box;
    padding: 40px;
    border-radius: 24px;
    background-color: ${Color.background.light};
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
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

export const Otp = styled.div`
    display: flex;
    direction: ltr;
    justify-content: space-between;
    margin-bottom: 32px;
    height: 46px;
    input{
        width: 42px;
        height: 44px;
        border: 1px solid ${Color.stroke.main};
        border-radius: 8px;
        text-align: center;
        font-family: VazirMatnFont;
        font-size: 24px;
        color: ${Color.text.main};
        transition: All ease-in-out 0.3s;
        &:focus{
            border: 1px solid ${Color.action.outlined};
            outline: none;
        }
    }
`;

export const Error = styled.label`
    display: flex;
    color: ${Color.danger.main};
    ${Typography.Caption};
    margin-bottom: 24px;
`;

export const Resend = styled.div`
    display: flex;
    margin-top: 24px;
    a{
        color: ${Color.info.main};
    }
    a, label{
        ${Typography.Caption};
    }
    label{
        color: ${Color.text.light};
    }
    .indent{
        margin-right: 4px;
    }
`;