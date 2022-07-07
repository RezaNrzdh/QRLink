const RouterHandler = (req,res) => {
    const {body} = req;

    res.status(200).redirect('/code');
}

export default RouterHandler;