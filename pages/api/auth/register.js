import Connection from "lib/connection";
import userModel from 'models/userModel';
import OTPGenerator from 'lib/otp';

const RouteHandler = async (req, res) => {

    const {body} = req;
    const otp = OTPGenerator();
    const otpExpired =  Date.now() + 120000

    const userBody = {
        ...body,
        otp: otp,
        otpExpired: otpExpired
    }
    // Set Header
    // /res.setHeader('Access-Control-Allow-Origin', process.env.DOMAIN);

    await Connection();

    const createUser = await userModel.create(userBody);

    if(createUser != null) {
        res.status(200).json({
            success: true,
            data: createUser
        })
    }

}

export default RouteHandler;