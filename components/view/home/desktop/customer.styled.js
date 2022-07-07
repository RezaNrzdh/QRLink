import { Color } from "constants/color";
import { Typography } from "constants/typography";
import styled from "styled-components";

export const Customer = styled.section`
    display: flex;
    width: 100%;
    min-height: 409px;
    background-color: ${Color.action.outlined};
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
    label, h2{
        padding-right: 16px;
    }
    label{
        color: ${Color.text.contrast};
        ${Typography.Caption};
    }
    h2{
        color: ${Color.text.contrast};
        ${Typography.Headline4};
    }
`;

export const CustomerCard = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 24px;
`;

export const Card = styled.div`
    display: flex;
    min-height: 256px;
    border-radius: 16px;
    background-color: white;
`;