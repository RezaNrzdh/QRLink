import * as S from "./body.styled";
import ModuleComponent from "./module";
import PreviewComponent from "./preview";
import UrlComponent from "./url";

const BodyComponent = () => {
    return(
        <S.Body>
            <UrlComponent />
            <S.Content>
                <ModuleComponent />
                <PreviewComponent />
            </S.Content>
        </S.Body>
    );
}

export default BodyComponent;