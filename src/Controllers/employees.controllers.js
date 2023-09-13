import {pool} from '../conectiondb.js'

export const getEmployee = async (req,res)=>{
  try {
    const id = req.params.id;
    const [rows] = await pool.query("SELECT name,salary FROM employee WHERE id = ?",[id]);
    if (rows.length > 0 ) {
      res.status(200).json({
        message:'query succesfull',
        rows
      })
    }else{
      res.status(404).send('Employee not found');
    }
  } catch (error) {
    res.status(404).send(error);
  }

}

export const updateEmployee = async (req,res)=>{

  try {
    const {id} = req.params;
    const {name,salary} = req.body;

    const [state] = await pool.query("UPDATE employee SET name = ? , salary = ? WHERE id = ? ",[name,salary,id]);
    if (state.affectedRows>0){
      res.status(200).send('updated sucessfull');
    }else{
      res.status(404).send('There were an error to try updated.');
    }
  } catch (error) {
    res.status(404).send(error);
  }

}


export const createEmployee = async (req,res)=>{

  try{
    const {name,salary} = req.body;
    const [insertId] = await pool.query("INSERT INTO employee(name,salary) VALUES(?,?)",[name,salary]);

    if(insertId.affectedRows>0){
      res.status(200).send({
        message: 'The employee was created sucessfull.',
        insertId
      }
        );
    }else{
      res.status(404).send('There was an error trying to create the new employee.');
    }
  }catch(error){
        res.status(404).send(error);
  }

}

export const deleteEmployee = async (req,res)=>{
  try {
    const {id} = req.params;
    const [rows] = await pool.query("DELETE from employee where id = ?",[id]);
    if(rows.affectedRows > 0){
        res.status(200).json({
          message: 'Delete sucessfull.',
          rows
        });

    }else{
      res.status(401).send('Error to try delete the employee, does not exist.');
    }
  } catch (error) {
      res.status(404).send(error);
  }

}
