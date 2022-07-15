import { Color } from "constants/color";
import { Typography } from "constants/typography";
import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    min-width: 0%;
    min-height: 414px;
    border-radius: 16px;
    border: 1px solid ${Color.stroke.main};
    box-sizing: border-box;
    background-color: white;
`;

export const ImageContainer = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 66%;
`;

export const Image = styled.img`
    position: absolute;
    width:100%;
    top: 0;
`;

export const Title = styled.h2`
    padding:16px 24px;
    color: ${Color.text.main};
    ${Typography.Subtitle1};
`;

export const Desc = styled.label`
    padding:0 24px;
    color: ${Color.text.light};
    ${Typography.Caption};
`;

export const Author = styled.label`
    display: flex;
    margin-top: auto;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    width: 100%;
    height: 24px;
    color: ${Color.text.main};
    ${Typography.Body2};  
`;