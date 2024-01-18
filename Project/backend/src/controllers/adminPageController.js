let getAdminPage = (req, res)=>{
    return res.send({text:`My name is ${req.body.name}`});
};

module.exports = {
    getAdminPage : getAdminPage
}