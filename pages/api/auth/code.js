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
                msg: "تبریک، ثبت نام شما با موفقیت انجام شد.",
                status: "success"
            });
        }
        else{
            res.status(200).json({
                msg: "کد یکبار مصرف شما اشتباه است، لطفا دوباره تلاش کنید",
                status: "danger"
            });
        }
    }
    else{
        res.status(200).json({
            msg: "زمان اعتبار رمز یکبار مصرف شما به اتمام رسیده است، لطفا دوباره تلاش کنید.",
            status: "info"
        });
    }
}

export default Handler;