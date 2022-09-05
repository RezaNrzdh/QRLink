import { Color } from "constants/color";
import { Elevation } from "constants/elevation";
import { Typography } from "constants/typography";
import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    cursor: pointer;
    overflow: hidden;
    flex-direction: column;
    min-height: 414px;
    border-radius: 16px;
    border: 1px solid ${Color.stroke.main};
    box-sizing: border-box;
    background-color: white;
    transition: all ease-in-out 0.3s;
    &:hover{
        border: 1px solid ${Color.primary.main};
        box-shadow: ${Elevation.header};
        img{
            transform: scale(1.1);
        }
    }
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
    object-fit: cover;
    background-position: center center;
    top: 0;
    transition: all ease-in-out 0.3s;
`;

export const Title = styled.h2`
    padding:16px 24px;
    color: ${Color.text.main};
    ${Typography.Subtitle1};
`;

export const Desc = styled.div`
    padding:0 24px;
    color: ${Color.text.light};
    ${Typography.Caption};
`;

export const Author = styled.div`
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