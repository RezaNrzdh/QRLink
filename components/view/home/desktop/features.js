import { Button } from 'components/common/buttons/button';
import Container from 'hoc/container';
import * as S from './features.styled';

const Features = () => {
    return(
        <S.Features>
            <Container column>
                <S.Feature>
                    <S.Image>
                        <img src='/images/featureImg.png'/>
                    </S.Image>
                    <S.Info>
                        <h2>ارتباط با شما تنها با یک کلیک!</h2>
                        <p>تمام کانال‌های ارتباطی، محصولات،‌ محتواها و پیشنهادات جذاب خود را بـا «هفده» در اختیـار مخاطبان‌تـان قـرار دهید. به این ترتیب مخاطبان تنها با یک کلیک با شما ارتباط برقرار می‌کنند.
                        تمام کانال‌های ارتباطی، محصولات،‌ محتواها و پیشنهادات جذاب خود را بـا «هفده» در اختیـار مخاطبان‌تـان قـرار دهید. به این ترتیب مخاطبان تنها با یک کلیک با شما ارتباط برقرار می‌کنند.
                        </p>
                        <Button colors={'primary'}>توضیحات بیشتر</Button>
                    </S.Info>
                </S.Feature>
                <S.Feature>
                    <S.Info>
                        <h2>یک صفحه اختصاصی شده پر از لینک</h2>
                        <p>تمام کانال‌های ارتباطی، محصولات،‌ محتواها و پیشنهادات جذاب خود را بـا «هفده» در اختیـار مخاطبان‌تـان قـرار دهید. به این ترتیب مخاطبان تنها با یک کلیک با شما ارتباط برقرار می‌کنند.</p>
                        <Button colors={'primary'}>توضیحات بیشتر</Button>
                    </S.Info>
                    <S.Image>
                        <img src='/images/featureImg.png'/>
                    </S.Image>
                </S.Feature>
                <S.Feature>
                    <S.Image>
                        <img src='/images/featureImg.png'/>
                    </S.Image>
                    <S.Info>
                        <h2>سفارشی‌سازی طراحی</h2>
                        <p>تمام کانال‌های ارتباطی، محصولات،‌ محتواها و پیشنهادات جذاب خود را بـا «هفده» در اختیـار مخاطبان‌تـان قـرار دهید. به این ترتیب مخاطبان تنها با یک کلیک با شما ارتباط برقرار می‌کنند.</p>
                        <Button colors={'primary'}>توضیحات بیشتر</Button>
                    </S.Info>
                </S.Feature>                                           
            </Container>
        </S.Features>
    );
}
export default Features;