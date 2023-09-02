# Book Catalog
## Using Typescript, Express, Zod, Prisma and Postgres

## Live URL: 

## Application Routes:
### User
- api/v1/auth/signup (POST)
- api/v1/auth/login (POST)
- api/v1/users (GET)
- api/v1/users/8c2f21e8-2238-4d7c-a46d-a3be85919bb8 (Single GET) Include an id that is saved in your database
- api/v1/users/8c2f21e8-2238-4d7c-a46d-a3be85919bb8 (PATCH)
- api/v1/users/8c2f21e8-2238-4d7c-a46d-a3be85919bb8 (DELETE) Include an id that is saved in your database
- api/v1/profile (GET)

## Category
- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/4efd4d5b-2084-4518-a4a5-d63295ac21bb (Single GET) Include an id that is saved in your database
- api/v1/categories/4efd4d5b-2084-4518-a4a5-d63295ac21bb (PATCH)
- api/v1/categories/4efd4d5b-2084-4518-a4a5-d63295ac21bb (DELETE) Include an id that is saved in your database

## Books
- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/cd01c50a-d112-4b3e-8eab-8dad4f646988 (GET)
- api/v1/books/cd01c50a-d112-4b3e-8eab-8dad4f646988 (PATCH)
- api/v1/books/cd01c50a-d112-4b3e-8eab-8dad4f646988 (DELETE)

## Orders
- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)