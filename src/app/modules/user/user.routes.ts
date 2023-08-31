import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validations';

const router = express.Router();

router.get(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.STUDENT),
  UserController.getAllFromDB
);

router.get('/:id', UserController.getByIdFromDB);

router.post(
  '/',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.STUDENT),
  validateRequest(UserValidation.create),
  UserController.insertIntoDB
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.STUDENT),
  validateRequest(UserValidation.update),
  UserController.updateIntoDb
);

router.delete(
    '/:id',
    // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.STUDENT),
    UserController.deleteFromDB
)

export const userRoutes = router;