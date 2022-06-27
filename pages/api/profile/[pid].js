import Connection from 'help/connection';
import QRCode from 'qrcode';

const RouteHandler = async (req, res) => {

    const {method} = req;

    switch(method) {
        case 'GET': 
            GetProfile(req, res);
            break;
        case 'PATCH': 
            UpdateProfile(req, res);
            break;     
        case 'DELETE': 
            DeleteProfile(req, res);
            break;                   
    }



    const GetProfile = (req, res) => {

    }

    const UpdateProfile = (req, res) => {

    }

    const DeleteProfile = (req, res) => {

    }

}

export default RouteHandler;