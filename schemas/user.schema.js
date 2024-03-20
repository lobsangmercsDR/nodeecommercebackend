const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(3);
const email = Joi.string().email();
const user_password = Joi.string().min(8);
const user_role = Joi.string();

const createUserSchema = Joi.object({
  nombre: nombre.required(),
  email: email.required(),
  user_password: user_password.required(),
  user_role: user_role.required()
});

const updateUserSchema = Joi.object({
  email: email,
  user_role: user_role
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
