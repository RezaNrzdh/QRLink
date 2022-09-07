import Connection from "lib/connection";
import userModel from 'models/userModel';

const Handler = async(req, res) => {
    const {body} = req;

    await Connection();

    

    res.status(200).json({
        otp: body.otpNumber,
        status: true,
        type: 'CODE'
    });
}

export default Handler;