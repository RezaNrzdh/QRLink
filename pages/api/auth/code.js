import Connection from "lib/connection";
import userModel from 'models/userModel';

const Handler = async(req, res) => {
    const {body} = req;

    await Connection();

    const getOTP = await userModel.findOne({ mobile: body.mobile }).select('mobile otp otpExpired');

    const CurrentTime = Date.now();

    if(CurrentTime < getOTP.otpExpired){
        if(getOTP.otp === body.otp){
            await userModel.updateOne({mobile: body.mobile},{registeredDone: true});
            res.status(200).json({
                msg: "Conguratulaion, Your Register has been done"
            });
        }
        else{
            res.status(200).json({
                msg: "Your OTP code is wrong, please try again."
            });
        }
    }
    else{
        res.status(200).json({
            msg: "I'm sorry, your OTP has been expired! please try again."
        });
    }
}

export default Handler;