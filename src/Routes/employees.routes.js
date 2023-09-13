
import express  from "express";
import {getEmployee,updateEmployee,createEmployee,deleteEmployee} from '../Controllers/employees.controllers.js';
const router = express.Router();

export const getidEmployee = router.get('/get/:id',getEmployee);

export const updateidEmployee = router.patch('/update/:id',updateEmployee);

export const createnewEmployee = router.post('/create',createEmployee);

export const deleteidEmployee = router.delete('/delete/:id',deleteEmployee);

