import Connection from "lib/connection";
import userModel from 'models/userModel';
import OTPGenerator from 'lib/otp';

const RouteHandler = async (req, res) => {
    // Set Header
    // /res.setHeader('Access-Control-Allow-Origin', process.env.DOMAIN);

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

    if(checkUserExist){
        if(checkUserExist.attempt < 5){
            if(checkUserExist.registeredDone === false){
                await userModel.where({ mobile: body.mobile }).update({ otp: otp, otpExpired: otpExpired, $inc: { 'attempt': 1 } });
                res.status(200).json({
                    success: true,
                    mobile: checkUserExist.mobile
                });
            }
            else{
                res.status(200).json({
                    success: false,
                    err: 'Mobile registered successfuly!'
                })
            }
        }
        else{
            res.status(200).json({
                success: false,
                err: 'You have attempts to register in more then 5 times.'
            })
        }
    }
    else{
        const createUser = await userModel.create(userBody);
        res.status(200).json({
            success: true,
            mobile: createUser.mobile
        });
    }
}

export default RouteHandler;