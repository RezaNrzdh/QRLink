import Link from "next/link";
import * as S from './linkButton.styled';

const LinkButton = ({
    href,
    basic = "primary",
    fullWidth,
    radius = "20px",
    colors,
    ...props
}) => {
    return(
        <Link href={`${href}`}>
            <S.Container colors={colors} fullWidth={fullWidth} radius={radius}>
                {props.children}
            </S.Container>
        </Link>
    );
}

export default LinkButton;