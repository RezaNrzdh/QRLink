import Connection from "utils/connection";
import customerModel from 'models/customerModel';

const RouteHandler = async (req, res) => {
    const {method} = req;

    await Connection();

    switch(method){
        case 'GET': 
            GetAllCustomers(req, res);
            break;
        case 'POST': 
            CreateCustomer(req, res);
            break;
    }
}

const GetAllCustomers = async (req, res) => {
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

const CreateCustomer = async (req, res) => {
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

export default RouteHandler;