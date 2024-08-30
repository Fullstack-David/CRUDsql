import Joi from "joi";

const userSchema = Joi.object({
  user_name: Joi.string().alphanum().min(5).max(20).required(),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: [".com", ".se"] },
  }),
});

export { userSchema };
