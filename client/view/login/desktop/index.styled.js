import { Color, Typography } from 'components';
import styled from 'styled-components';

export const Background = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    top:0;
    right: 0;
    background-image: url('/images/bg.svg');
    background-position: top center;
    background-repeat: repeat-y;
`;

export const FormWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100vh;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 88px;
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

export const HeroWrapper = styled.section`
    display: flex;
    width: 50%;
    background-color: ${Color.primary.light};
`;