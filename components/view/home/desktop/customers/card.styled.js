import { Color } from "constants/color";
import { Typography } from "constants/typography";
import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0%;
    min-height: 256px;
    border-radius: 16px;
    padding: 24px;
    box-sizing: border-box;
    background-color: white;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-bottom: 24px;
    div.customerLogo{
        width: 100%;
        height: inherit;
    }
    svg{
        margin-right: auto;
        color:${Color.stroke.main};
    }
`;

export const Desc = styled.div`
    display: flex;
    width: 100%;
    min-height: 114px;
    margin-bottom: 8px;
    color: ${Color.text.light};
    ${Typography.Caption};
`;

export const Author = styled.div`
    display: flex;
    width: 100%;
    height: 24px;
    color: ${Color.text.main};
    ${Typography.Body2};    
`;