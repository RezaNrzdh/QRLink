import { Icon } from "constants/icon";
import { useEffect } from "react";
import * as S from "./alert.styled";

const Alert = ({visible, type, msg, click}) => {
    return(
        <S.Alert type={type} visible={visible}> 
            <label>{msg}</label>
            <a onClick={click}>
                <Icon icon='icon-close' size={24}/>
            </a>
        </S.Alert>
    );
}

export default Alert