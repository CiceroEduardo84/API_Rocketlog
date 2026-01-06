# Rocketlog - API

## Technologies

- `Node.js`
- `Typescript`
- `Javascript`
- `Express`
- `JSON Web Token (JWT)`
- `Bcrypt`
- `Zod`
- `Jest`
- `Prisma`
- `PostgreSql`

## Installation

```bash
# clone project
  $ git clone https://github.com/CiceroEduardo84/API_Rocketlog.git

# Initialize the database container using Docker Compose.
  $ docker-compose up -d

# Install dependencies
  $ npm install

# Execute Prisma migrations
  $ npx prisma migrate dev

# Run to test the application.
$ npm run test:dev

# Run api in the developer mode
  $ npm run dev

# Run api in production
  $ npm run build
  $ npm start
```

## Environment Variables

```ini
DATABASE_URL=
JWT_SECRET=
PORT=
```

## Routes

| Functionality | Method   | Endpoint                        | Description                                        |
| ------------- | -------- | ------------------------------- | -------------------------------------------------- |
| Auth          | `POST`   | /sessions                       | Start the user session                             |
| User          | `POST`   | /user                           | Create a new user                                  |
| Devliveries   | `GET`    | /deliveries                     | Return deliveries informations                     |
|               | `POST`   | /deliveries                     | Create a new delivery                              |
|               | `PATCH`  | /deliveries/:id/status          | Update the status an existing deliveries(sale)     |
| Delivery-logs | `POST`   | /delivery-logs                  | New description status an existing deliveries(sale)|
|               | `GET`    | /delivery-logs/:delivery_id/show| Return informations delivery and logs              |
