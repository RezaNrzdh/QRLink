import { Color } from "constants/color";
import { Typography } from "constants/typography";
import styled from "styled-components";

export const Module = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    flex-grow: 1;
    label{
        ${Typography.Body2};
        color: ${Color.text.main};
        margin-bottom: 16px;
    }
    .moduleContainer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 16px;
        margin-left: 24px;
        margin-bottom: 24px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 64px;
    border: 1px solid ${Color.stroke.main};
    border-radius: 16px;
    background-color: ${Color.background.light};
    svg{
        margin-right: 16px;
        margin-left: 8px;
        color: ${Color.icon.main};
    }
    span{
        font-family: VazirMatnFont;
        ${Typography.Body2};
        color: ${Color.text.light};
    }
`;