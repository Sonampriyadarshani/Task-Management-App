import Joi from "joi";

// ============================
// Create Validation
// ============================
export const validateCreateTask = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().allow("").optional(),
    status: Joi.string().valid("pending", "completed").optional(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};

// ============================
// Update Validation
// ============================
export const validateUpdateTask = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).optional(),
    description: Joi.string().allow("").optional(),
    status: Joi.string().valid("pending", "completed").optional(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};
