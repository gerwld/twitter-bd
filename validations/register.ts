import { body } from "express-validator";

export const registerValidations = [
  body("email", "Введите e-mail")
    .isEmail()
    .withMessage("Неверный e-mail ")
    .isLength({
      min: 8,
      max: 40,
    })
    .withMessage("Допустимое кол-во символов в e-mail - от 8 до 40."),
  body("name", "Введите имя")
    .isString()
    .withMessage("Неверное значение строки - имя")
    .isLength({
      min: 2,
      max: 30,
    })
    .withMessage("Допустимое кол-во символов в имени - от 2 до 30."),
  body("username", "Укажите логин")
    .isString()
    .isLength({
      min: 4,
      max: 15,
    })
    .withMessage("Допустимое кол-во символов в логине - от 4 до 15."),
  body("password", "Укажите пароль")
    .isLength({
      min: 8,
      max: 16,
    })
    .withMessage("Допустимое кол-во символов в пароле - от 8 до 16.")
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error("Пароли не совпадают");
      } else return value;
    }),
];
