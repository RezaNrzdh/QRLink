import {MongoClient} from "mongodb";

const Handler = async (req, res) => {
    const {method} = req;

    if(method === "GET"){
        const client = await MongoClient.connect('mongodb://localhost:27017/QRLinkDB');
        const db = client.db();

        const collection = db.collection("examples");
        const result = await collection.find().toArray();
        
        client.close();

        res.status(200).json({
            data: result
        });
    }
}

export default Handler; 