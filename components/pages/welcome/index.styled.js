import { Color } from "constants/color";
import { Typography } from "constants/typography";
import styled from "styled-components";

export const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    width: 407px;
    margin: auto;
    height: fit-content;
    box-sizing: border-box;
    border-radius: 24px;
    background-color: ${Color.background.light};
`;

export const Image = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    border-radius: 24px 24px 0 0;
    background-color: ${Color.primary.light};
    img{
        margin: auto;
        width: 250px;
        height: 250px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
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
