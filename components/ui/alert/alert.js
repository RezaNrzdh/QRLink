import { useEffect } from "react";
import * as S from "./alert.styled";

const Alert = ({visible, type, msg}) => {
    return(
        <S.Alert type={type} visible={visible}>
            <label>{msg}</label>
        </S.Alert>
    );
}

export default Alert