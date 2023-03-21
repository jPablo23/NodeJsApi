const app = require("./app");
const db = require('./config/db');
const UserModel = require('./models/user.model');

const port = 3000;

app.get('/',(req,res)=> {
    res.send("base datos");
});

app.listen(port, () => {
    console.log('EL servidor esta jalando, http://localhost:'+port);
});
