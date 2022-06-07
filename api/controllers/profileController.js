const QRCode = require('qrcode');

exports.getAllProfile = (req, res) => {
    res.status(200).json({
        name: 'reza',
        job: 'UIUX Designer'
    });
}

exports.createProfile = (req, res) => {
    QRCode.toDataURL('https://hefdah.ir/RezaNrzdh', function (err, url) {
        console.log(url)
      });
    res.status(200).send('rrrr');
}

exports.getProfile = (req, res) => {

}

exports.updateProfile = (req, res) => {

}

exports.deleteProfile = (req, res) => {

}