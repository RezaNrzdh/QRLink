import { Color } from "constants/color";
import { Typography } from "constants/typography";
import styled from "styled-components";

const Type = ({type}) => {
    if(type === "success"){
        return `${Color.success.light}`;
    }
    else if(type === "danger"){
        return `${Color.danger.light}`;
    }
    else if(type === "warning"){
        return `${Color.warning.light}`;
    }
    else if(type === "info"){
        return `${Color.info.light}`;
    }
}

export const Alert = styled.div`
    display: ${ p => p.visible ? "flex" : "none" };
    box-sizing: border-box;
    position: relative;
    top: 56px;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    border-radius: 16px;
    padding: 16px;
    background-color: ${Type};
    color: ${Color.text.main};
    ${Typography.Caption}
    label{
        margin-left: 16px;
    }
    a{
        display: flex;
        position: relative;
        left:0;
        width: 24px;
        height: 24px;
        margin-right: auto;
    }
`;