let getManagerPage = (req, res)=>{
    return res.send({text : "My name is Manager"});;
};

module.exports = {
    getManagerPage : getManagerPage
}