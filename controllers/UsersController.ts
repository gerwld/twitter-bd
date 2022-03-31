import express from "express";
import { validationResult } from "express-validator";
import { UserModel } from '../models/UsersModel';
import { generateMd5 } from '../utils/generateHash';

class UserController {
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const users = await UserModel.find({}).exec();

      res.json({
        status: 'Success',
        data: users
      })
    } catch (error) {
      res.json({
        status: 'Error',
        message: JSON.stringify(error)
      })
    }
  }

  async create(res: express.Response, req: express.Request): Promise<void> {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        res.status(400).json({status: "error", errors: errors.array()})
      } 
      const data = {
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.username,
        password: req.body.password,
        confirm_hash: generateMd5(process.env.SECRET_KEY || Math.random().toString())
      } 
      const user = UserModel.create(data);
      res.json({
        status: "Success",
        data: user
      });
    } catch (error) {
      
    }
  }
}

export const UserCtrl = new UserController();