let getVpPage = (req, res)=>{
    return res.send({text : "My name is VP Team"});
};

module.exports = {
    getVpPage : getVpPage
}