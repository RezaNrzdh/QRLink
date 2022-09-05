import Connection from "lib/connection";
import articleModel from 'models/articleModel';

const RouteHandler = async (req, res) => {
    const {method} = req;

    await Connection();

    if(method === "GET") {
        try{
            const data = await articleModel.find().limit(req.query.limit);
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
            const data = await articleModel.create(req.body);
            res.status(200).json({
                success: true,
                data: data
            });
        }
        catch(err){
            throw new err;
        }
    }
}

export default RouteHandler;