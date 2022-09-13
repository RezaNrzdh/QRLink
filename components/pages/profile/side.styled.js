import { Color } from "constants/color";
import { Typography } from "constants/typography";
import styled from "styled-components";

export const Side = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-width: 302px;
    height: fit-content;
    border: 1px solid ${Color.stroke.main};
    border-radius: 16px;
    margin: 24px 0;
`;

export const UserInfo = styled.div`
    display: flex;
    padding: 32px 40px 32px 24px;
    height: 80px;
    .avatar{
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 80px;
        min-height: 80px;
        border-radius: 40px;
        color: ${Color.icon.contrast};
        background-color: ${Color.info.light};
    }
    .info{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        margin-right: 16px;
        .name{
            display: flex;
            align-items: center;
            color: ${Color.text.main};
            ${Typography.Subtitle1};
            a{
                width: 16px;
                height: 16px;
                margin-right: auto;
                color: ${Color.icon.main};
            }
        }
        .phone{
            color: ${Color.text.main};
            ${Typography.Caption};
        }
    }
`;

export const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
`;

export const Button = styled.a`
        display: flex;
        align-items: center;
        height: 48px;
        padding-right: 40px;
        transition: all ease-in-out 0.3s;
        cursor: pointer;
        background-color: ${
            props => props.active 
                ? `${Color.primary.lighter}` 
                : 'transparent'
        };
        box-shadow: ${
            props => props.active
                ? `inset -4px 0 0 ${Color.primary.main}`
                : 'none'
        };
        svg{
            color:${
                props => props.active
                    ? `${Color.icon.dark}`
                    : `${Color.icon.main}`
            };
        };
        span{
            margin-right: 12px;
            ${Typography.Body1};
            color:${
                props => props.active
                    ? `${Color.text.main}`
                    : `${Color.text.lighter}`
            };
        };
        &:hover{
            background-color: #f9f9f9;
            svg{
                color: ${Color.icon.dark};
            }
            span{
                color: ${Color.icon.dark};
            }
        }
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 24px;
    margin: 0 24px 0 24px;
    border-bottom: 1px solid ${Color.stroke.light};
`;

export const Exit = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 24px;
`;