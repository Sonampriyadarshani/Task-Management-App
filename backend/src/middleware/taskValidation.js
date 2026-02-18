import Joi from "joi";


// For Create Validation
export const validateCreateTask = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().allow("").optional(),
    status: Joi.string().valid("pending", "completed").optional(),
  });

  const { error } = schema.validate(req.body,{ abortEarly: false });

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};

// For Update Validation
export const validateUpdateTask = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).optional(),
    description: Joi.string().allow("").optional(),
    status: Joi.string().valid("pending", "completed").optional(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};
