import express from "express";
//import main from '../Routes/index.routes'
import {main} from './index.routes.js'
import {getidEmployee,updateidEmployee,createnewEmployee,deleteidEmployee} from './employees.routes.js';

const app = express();

app.use(express.json());


app.use(main);
app.use(getidEmployee)
app.use(updateidEmployee);
app.use(createnewEmployee);
app.use(deleteidEmployee);

app.use((req,res,next)=>{
    res.status(404).send('The route was not found.')
})

export default app;
