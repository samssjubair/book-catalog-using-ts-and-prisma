import express from 'express';
import { bookRoutes } from '../modules/book/book.routes';
import { categoryRoutes } from '../modules/category/category.routes';
import { orderRoutes } from '../modules/order/order.routes';
import { authRoutes } from '../modules/user/auth.routes';
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
  },
  {
    path: "/orders",
    routes: orderRoutes
  },
  {
    path: "/auth",
    routes: authRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
