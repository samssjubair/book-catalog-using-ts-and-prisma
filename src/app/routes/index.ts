import express from 'express';
import { bookRoutes } from '../modules/book/book.routes';
import { categoryRoutes } from '../modules/category/category.routes';
import { userRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/users",
    routes: userRoutes
  },
  {
    path: "/categories",
    routes: categoryRoutes
  },
  {
    path: "/books",
    routes: bookRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
