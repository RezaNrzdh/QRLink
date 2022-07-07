import Container from "hoc/container";
import * as S from './customer.styled';
import Card from "./card";

const Customers = () => {
    return(
        <S.Customer>
            <Container column>
                <S.Title>
                    <label>هفده از نگاه مشتریان</label>
                    <h2>کسب و کارهایی که به ما اعتماد کرده اند</h2>
                </S.Title>
                <S.CustomerCard>
                    {
                        [0,0,0,0].map((i) => {
                            return <Card />
                        })
                    }
                </S.CustomerCard>
            </Container>
        </S.Customer>
    );
}

export default Customers;