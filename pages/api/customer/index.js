import Connection from "utils/connection";
import customerModel from 'models/customerModel';

const RouteHandler = async (req, res) => {
    const {method} = req;

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
    await Connection();
}

const CreateCustomer = async (req, res) => {
    await Connection();

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