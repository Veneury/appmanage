const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist/angular-manage'));
app.get('/*', (req,res)=>
{
res.sendFile(path.join(__dirname+'/dist/angular-manage/index.html'));
});


app.listen(process.env.PORT || 8080);
