const ProfileController = require('controllers/profileController');

const Handler = async (req, res) => {
    const {method} = req;

    switch(method) {
        case 'GET': ProfileController.getAllProfile(req, res);break;
        case 'POST': ProfileController.createProfile();break;
    }

}

export default Handler;