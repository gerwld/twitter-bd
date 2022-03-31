import dotenv from "dotenv";
import express from 'express';
import { UserCtrl } from './controllers/UsersController';
import { registerValidations } from './validations/register';
import "./core/db";

const app = express();


dotenv.config();

app.use(express.json());

app.get('/users', UserCtrl.index);
app.get('/users', registerValidations, UserCtrl.create);
// app.patch('/users', UserCtrl.update);
// app.delete('/users', UserCtrl.delete);




app.listen(8888, () => {

console.log("Server running");

});