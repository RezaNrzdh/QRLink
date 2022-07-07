import Container from "hoc/container";
import * as S from './customer.styled';

const Customers = () => {
    return(
        <S.Customer>
            <Container column>
                <S.Title>
                    <label>هفده از نگاه مشتریان</label>
                    <h2>کسب و کارهایی که به ما اعتماد کرده اند</h2>
                </S.Title>
                <S.CustomerCard>
                    <S.Card></S.Card>
                    <S.Card></S.Card>
                    <S.Card></S.Card>
                    <S.Card></S.Card>
                </S.CustomerCard>
            </Container>
        </S.Customer>
    );
}

export default Customers;