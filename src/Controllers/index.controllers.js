import {pool} from '../conectiondb.js'

export const getMainEmployee = async(req,res)=>{
  const result = await pool.query("SELECT * FROM employee;")
  res.json(result[0]);
}

