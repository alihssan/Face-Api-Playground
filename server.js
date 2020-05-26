const project_data={}
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const cors=require('cors');
app.use(cors());
app.use(express.static('App'));
const port=8080;
const server=app.listen(port,listening);
function listening(){
	console.log(`app running${port}`);
}
app.get("/",function(req,res){
	res.sendFile("./App/index.html",{root:__dirname});
});
app.post("/post1",function(req,res){res.send("post ready")});
let data=[];
app.post("/post",function(req,res){
	data.push(req.body);
	console.log(data);
});