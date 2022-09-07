import Connection from "lib/connection";
import userModel from 'models/userModel';

const Handler = async(req, res) => {
    const {body} = req;

    await Connection();

    const getOTP = await userModel.findOne({ mobile: body.mobile }).select('mobile otp otpExpired');

    if(getOTP === body.top){
        console.log('YES')
    }
    else{
        console.log('NO')
    }

    res.status(200).json({
        otp: body.otp,
        status: true,
        body: getOTP
    });
}

export default Handler;