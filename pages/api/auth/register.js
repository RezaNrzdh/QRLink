import Connection from "lib/connection";
import userModel from 'models/userModel';
import OTPGenerator from 'lib/otp';

const RouteHandler = async (req, res) => {
    // Set Header
    // res.setHeader('Access-Control-Allow-Origin', process.env.DOMAIN);

    const {body} = req;
    const otp = OTPGenerator();
    const otpExpired =  Date.now() + 120000

    const userBody = {
        ...body,
        otp: otp,
        otpExpired: otpExpired
    }

    await Connection();

    const checkUserExist = await userModel.findOne({ mobile: body.mobile});

    if(!checkUserExist){
        const createUser = await userModel.create(userBody);
        return res.status(200).json({
            status: "created",
            mobile: createUser.mobile
        });
    }

    if(checkUserExist.attempt > 4){
        return res.status(200).json({
            status: "limited"
        })
    }

    if(!checkUserExist.registeredDone){
        await userModel.updateOne({ mobile: body.mobile }, { otp: otp, otpExpired: otpExpired, $inc: { 'attempt': 1 } });
        return res.status(200).json({
            status: "attempt",
            mobile: checkUserExist.mobile
        });
    }

    if(checkUserExist.registeredDone){
        return res.status(200).json({
            status: "done",
            mobile: checkUserExist.mobile
        });
    }

}

export default RouteHandler;