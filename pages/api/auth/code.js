const RouterHandler = (req,res) => {
    const {body} = req;

    res.status(200).redirect('/auth/code');
}

export default RouterHandler;