import { Color } from "constants/color";
import { Typography } from "constants/typography";
import styled from "styled-components";

export const Customer = styled.section`
    display: flex;
    width: 100%;
    padding-bottom: 32px;
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
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    grid-column-gap: 24px;
`;