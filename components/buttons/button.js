import * as S from "./button.css";

export const Button = ({basic, click, size, ...props}) => {
    return(
        <button onClick={click} style={{ width: size, backgroundColor: basic }}>{props.children}</button>
    )
}