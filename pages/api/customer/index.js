import Connection from "lib/connection";
import customerModel from 'models/customerModel';

const RouteHandler = async (req, res) => {
    const {method} = req;

    await Connection();

    if(method === "GET") {
        try{
            const data = await customerModel.find().limit(4);
            res.status(200).json({
                success: true,
                data: data
            });
        }
        catch(err){
            throw new err;
        }
    }
    else if(method === "POST") {
        try{
            await customerModel.create(req.body);
            res.status(200).json({
                success: 200,
                data: 'New customer successfully created.'
            });
        }
        catch(err){
            throw new err;
        }
    }
}

export default RouteHandler;