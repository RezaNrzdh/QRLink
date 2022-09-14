import { Color } from "constants/color";
import { Typography } from "constants/typography";
import styled from "styled-components";

export const Url = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    background-color: white;
    border: 1px dashed ${Color.stroke.main};
    border-radius: 16px;
    box-shadow: 0 6px 12px rgba(0,0,0,0.04);
`;

export const Address = styled.div`
    margin-right: auto;
    .domain{
        margin-left: 24px;
        ${Typography.Body1};
        color: ${Color.text.lighter};
        margin-right: 4px;
    }
    .account{
        font-size: 24px;
        color: ${Color.text.main};
    }
`;

export const Actions = styled.div`
    margin-right: 16px;
`;