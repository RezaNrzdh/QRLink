import * as S from "./index.styled";
import { Textfield } from "components/ui/textfield/textfield";
import {Button} from 'components/index';


const WelcomeComponent = () => {

    const onFormHandler = (event) => {
        event.preventDefault();
        console.log(event.target.link.value);
    }

    return(
        <S.Welcome>
            <S.Image>
                <img src="/images/qrbanner.png" />
            </S.Image>
            <S.Content>
                <S.Title>
                    <h1>لینک خود را بسازید</h1>
                    <label>یادتون باشه، بعد از ساخت لینک، دیگه نمی‌تونید نامش رو تغییر بدید.</label>
                </S.Title>
                <form onSubmit={onFormHandler}>
                    <Textfield
                            label='نام لینک'
                            ltr
                            prefix='https://hefdah.ir/'
                            type='text'
                            id='link'
                            name='link'/>
                    <Button
                        fullWidth='true'
                        variant='contained'
                        colors='primary'
                        type='submit'>
                            ساخت لینک
                    </Button>                            
                </form>
            </S.Content>
        </S.Welcome>
    );
}

export default WelcomeComponent;