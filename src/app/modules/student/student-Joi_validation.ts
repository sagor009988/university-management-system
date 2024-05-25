import validator from 'validator';
import Joi from 'Joi';
const studentValidationSchema = Joi.object({
  id: Joi.string().required(), // Ensures unique identifier
  name: Joi.object({
    firstName: Joi.string().required().max(255),
    lastName: Joi.string().required().max(255),
  }).required(),
  gender: Joi.string().valid('male', 'female').required(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloogGroup: Joi.string().allow(null), // Allows null for blood group
  presentAddress: Joi.string().required(),
  permanentAddres: Joi.string().required(),
  guardian: Joi.object({
    fatherName: Joi.string().required(),
    motherName: Joi.string().required(),
  }).required(),
  localGuardian: Joi.object({
    name: Joi.string().required(),
    contactNo: Joi.string().required(),
  }).required(),
  isActive: Joi.string().valid('active', 'blocked'),
});
export default {
  studentValidationSchema,
};
