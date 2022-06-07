exports.getAllProfile = (req, res) => {
    res.status(200).json({
        name: 'reza',
        job: 'UIUX Designer'
    });
}

exports.createProfile = (req, res) => {
    console.log(req.body);
    res.status(200).send('reza');
}

exports.getProfile = (req, res) => {

}

exports.updateProfile = (req, res) => {

}

exports.deleteProfile = (req, res) => {

}