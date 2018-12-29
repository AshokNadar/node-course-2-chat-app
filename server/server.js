const path = require('path');
const express =require('express');


const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var app = express();
app.use(express.static(publicPath));
//app.set('view engine', 'html');



app.get('/', (req, res) =>{
   res.render('index');
});
app.listen(port,()=>{
    console.log('app up and running on port number',port);
    
})