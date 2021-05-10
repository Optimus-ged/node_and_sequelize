// Importing dependencies
import User from "../models/user_mdl";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Config dotenv
dotenv.config();

// User Controller
const userController = {
  // get-request for all users
  getUsers: async (req, res) => {
    let response = await User.findAll().catch((err) => {
      console.err(err);
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
    res.status(200).json({
      status: 200,
      count: response.length,
      users: response,
    });
  },

  // Handling get-request for one user
  getOneUser: async (req, res) => {
    let id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
    let response = await User.findOne({ where: id }).catch((err) => {
      console.error(err);
    });
    if (response) {
      return res.status(200).json({
        status: 200,
        user: response,
      });
    }
    res.status(404).json({
      error: {
        status: 404,
        message: "User not found",
      },
    });
  },

  // Add user sign up
  signup: async (req, res) => {
    let userExist = await User.findOne({
      where: {
        nom: req.body.nom,
        contact: req.body.contact,
      },
    });
    if (userExist) {
      return res.status(500).json({
        error: {
          status: 500,
          message: "L'utilisateur existe deja",
        },
      });
    } else {
      let cryptedPwd = await bcrypt.hash(req.body.mot_de_passe, 10);
      let response = await User.create({
        nom: req.body.nom,
        contact: req.body.contact,
        mot_de_passe: cryptedPwd,
      }).catch((err) => {
        console.log(err);
        res.status(500).json({
          error: {
            status: 500,
            message: err.message,
          },
        });
      });

      if (response) {
        return res.status(201).json({
          status: 201,
          message: "User created successfully",
          response: response,
        });
      }
    }
  },

  // Login User
  loginUser: async (req, res) => {
    let response = await User.findOne({
      where: { nom: req.body.nom },
    }).catch((err) => console.error(err));

    if (!response) {
      return res.status(404).json({
        status: 404,
        message: "Authentification failed please check your name",
      });
    }

    let verified = await bcrypt.compare(req.body.mot_de_passe, response.mot_de_passe);
    if (!verified) {
      return res.status(500).json({
        status: 500,
        error: {
          message: "Authentification failed",
        },
      });
    }

    let token = jwt.sign(
      { nom: req.body.nom, id: response.id },
      process.env.JWT_KEY,
      { expiresIn: process.env.EXPIRE_TOKEN }
    );

    res.status(200).json({
      status: 200,
      message: "Authentification success",
      token: token,
    });
  },

  // Update data for users
  updateUser: async (req, res) => {
    let _id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
    let response = await User.findOne({ where: { id: _id } });
    if (!response) {
      res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }
    if (response) {
      let updated = await User.update(
        { nom: req.body.nom },
        { where: { id: _id } }
      );
      if (updated[0] != 0) {
        res.status(200).json({
          status: 200,
          message: "User Updated Successfully",
        });
      } else {
        res.status(500).json({
          status: 500,
          message: "User Not updated",
        });
      }
    }
  },

  // Delete a product
  deleteUser : async (req, res)=>{
    let _id = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
    let response = await User.findOne({where : {id : _id}});
    if(!response){
      res.status(404).json({
        status : 400,
        message : "Id does not Exist"
      })
    }else{
      await User.destroy({where : {id : _id}});
      res.status(200).json({
        status : 200,
        message : "Success deleted"
      });
    }
  }
};

// Exporting module
export default userController;