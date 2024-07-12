// validators.js
const { check, validationResult } = require('express-validator');

// التحقق من صحة بيانات المستخدم
const userValidationRules = () => {
  return [
    check('title').notEmpty().withMessage('Username is required').isString().isLength({ min: 2 }).withMessage('Username must be at least 3 characters long'),
    check('tobic').notEmpty().withMessage('Username is required').isString().isLength({ min: 2 }).withMessage('Username must be at least 3 characters long'),
    check('place').notEmpty().withMessage('Username is required').isString().isLength({ min: 2 }).withMessage('Username must be at least 3 characters long'),
    // check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ];
};

// معالجة الأخطاء
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ errors: errors.array() });
};

module.exports = {
  userValidationRules,
  validate,
};
