import express from "express";
import { dirname } from "path"
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 1600;

app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.get('/',(req,res)=>{
    res.render('test.ejs');
})
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})