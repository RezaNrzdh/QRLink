import Connection from 'help/connection';
import QRCode from 'qrcode';

const RouteHandler = async (req, res) => {

    const {method} = req;

    switch(method) {
        case 'GET': 
            GetAllProfile(req, res);
            break;
        case 'POST': 
            CreateProfile(req, res);
            break;
    }


    
    const GetAllProfile = (req, res) => {

    }

    const CreateProfile = (req, res) => {

    }

}

export default RouteHandler;