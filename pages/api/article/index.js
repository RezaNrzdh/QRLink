import Connection from "utils/connection";
import articleModel from 'models/articleModel';

const RouteHandler = async (req, res) => {
    const {method} = req;

    await Connection();

    switch(method){
        case 'GET': GetAllArticles(req, res); break;
        case 'POST': CreateNewArticle(req, res); break;
    }
}

const GetAllArticles = async (req, res) => {
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

const CreateNewArticle = async (req, res) => {
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

export default RouteHandler;