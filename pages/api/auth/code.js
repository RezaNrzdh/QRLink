import Connection from "lib/connection";
import userModel from 'models/userModel';

const Handler = async(req, res) => {
    const {body} = req;
    const message = {
        expired: "زمان اعتبار رمز یکبار مصرف شما به اتمام رسیده است، لطفا دوباره تلاش کنید.",
        done: "این شماره قبلا با موفقیت ثبت نام کرده است.",
        success: "تبریک، ثبت نام شما با موفقیت انجام شد.",
        wrong: "کد یکبار مصرف شما اشتباه است، لطفا دوباره تلاش کنید"
    }

    await Connection();

    const getOTP = await userModel.findOne({ mobile: body.mobile }).select('mobile otp otpExpired registeredDone');

    const CurrentTime = Date.now();

    if(CurrentTime > getOTP.otpExpired){
        return res.status(200).json({
            msg: message.expired,
            status: "info"
        });
    }

    if(getOTP.registeredDone){
        return res.status(200).json({
            msg: message.done,
            status: "info"
        });
    }

    if(getOTP.otp === body.otp){
        await userModel.where({mobile: body.mobile}).update({registeredDone: true});
        return res.status(200).json({
            msg: message.success,
            status: "success"
        });
    }
    else{
        return res.status(200).json({
            msg: message.wrong,
            status: "danger"
        });
    }
}

export default Handler;