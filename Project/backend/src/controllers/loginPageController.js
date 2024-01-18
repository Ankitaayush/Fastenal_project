let getLoginPage = (req, res)=>{
    return res.send({text : "My name is User"});
};

module.exports = {
    getLoginPage : getLoginPage
}