import LinkButton from "components/ui/buttons/linkButton";
import * as S from "./url.styled";

const UrlComponent = () => {
    return(
        <S.Url>
            <S.Actions>
                    <LinkButton colors='primary'>کپی آدرس</LinkButton>
            </S.Actions>            
            <S.Address>
                <span className="domain">hefdah.ir/</span>
                <span className="account">RezaNrzdh</span>
            </S.Address>
        </S.Url>
    );
}

export default UrlComponent;