import {PORT} from './Routes/config.js';
import app from './Routes/app.js';

app.listen(PORT,(req,res)=>{
  console.log(`listening on port ${PORT}`);
});

