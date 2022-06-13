import Connection from "lib/connection";
import userModel from 'models/userModel';

const RouteHandler = async (req, res) => {

    const {body} = req;
    
    // Set Header
    // /res.setHeader('Access-Control-Allow-Origin', process.env.DOMAIN);

    await Connection();

    const createUser = await userModel.create(body);

    if(createUser != null) {
        res.status(200).json({
            success: true,
            data: createUser
        })
    }

}

export default RouteHandler;