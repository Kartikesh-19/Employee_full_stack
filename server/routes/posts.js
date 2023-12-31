import express from 'express';
import { getEmployees ,createEmployees, updateEmployees, deleteEmployees} from '../controllers/posts.js';

const router = express.Router()

router.get('/',getEmployees)
router.post('/create',createEmployees)
router.post('/update',updateEmployees)
router.post('/delete',deleteEmployees)
// router.get('/',(req,res)=>{
// res.send('this works')
// })
// router.post('/post',(req,res)=>{
// res.send('this works')
// })
export default router;