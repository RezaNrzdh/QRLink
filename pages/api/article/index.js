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
        res.status(200).json({
            success: true,
            data: 'GET ALL ARTICLES.'
        });
    }
    catch(err){
        throw new err;
    }
}

const CreateNewArticle = async (req, res) => {
    try{
        res.status(200).json({
            success: true,
            data: 'CREATE NEW ARTICLE.'
        });
    }
    catch(err){
        throw new err;
    }
}

export default RouteHandler;