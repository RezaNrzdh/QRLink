import styled from 'styled-components';
import {Color} from 'constants/color';
import { Typography } from 'constants/typography';

export const Article = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 32px;
`;

export const Title = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin-top: 32px;
    margin-bottom: 32px;
    &::before{
        position: absolute;
        bottom: 0;
        top:8px;
        content: '';
        width: 2px;
        height: 40px;
        background-color: ${Color.primary.main};
    }
    label, h3{
        padding-right: 16px;
    }
    label{
        color: ${Color.text.main};
        ${Typography.Caption};
    }
    h3{
        color: ${Color.text.main};
        ${Typography.Headline4};
    }
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 24px;
`;