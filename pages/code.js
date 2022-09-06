import {useContext} from 'react';
import {mainContext} from 'provider/mainContext';
import CodeComponent from 'components/pages/code';

const CodePage = () => {
    const{mobileNumber, MobileNumberHandler} = useContext(mainContext);

    return <CodeComponent mobileNumber={mobileNumber} MobileNumberHandler={MobileNumberHandler} />
}

export default CodePage;