import { Color } from "constants/color";
import { Typography } from "constants/typography";
import styled, { keyframes } from "styled-components";

const animate = keyframes`
    0%{
        transform: translateY(-10%);
        color: ${Color.text.main};
    }

    50%{
        transform: translateY(10%);
        color: ${Color.primary.main};
    }

    100%{
        transform: translateY(-10%);
        color: ${Color.text.main};
    }
`;

export const Hero = styled.section`
    display: flex;
    width: 100%;
    height: 450px;
    background-color: #F1F1F1;
`;

export const Container = styled.div`
    display: flex;
    position: relative;
    margin: 0 auto;
    width: 1120px;
    height: inherit;
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: inherit;
    img{
        width: 101px;
    }
    h3{
        color: ${Color.text.main};
        margin-top: 8px;
        margin-bottom: 8px;
        font-size: 40px;
        font-weight: 700;
    }
    label{
        color: ${Color.text.main};
        ${Typography.Body2};
        margin-bottom: 32px;
    }
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;    
    width: 50%;
    height: inherit;
    img.shapes{
        width: 370px;
        align-self: flex-end;
    }
`;

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -64px;
    margin: auto;
    width: 128px;
    height: 128px;
    border-radius: 64px;
    background-color: rgba(0,0,0,0.05);
    div{
        display: flex;
        justify-content: center;
        align-items: center;        
        width: 96px;
        height: 96px;
        border-radius: 48px;
        background-color: white;
        svg{
            color: ${Color.text.main};
            animation: ${animate} 1s ease-in-out infinite;
        }
    }
`;