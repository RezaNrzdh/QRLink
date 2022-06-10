import IcoMoon from "react-icomoon";
import iconSet from 'public/icons/selection.json';

const Icon = (props) => {
    return(
        <IcoMoon iconSet={iconSet} {...props} />
    );
}

export {Icon}