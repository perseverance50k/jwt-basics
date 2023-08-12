# JWT Managing App

This app demonstrates the management of JWT tokens.
Each time a user sends some data from the front-end form,
they receive their JWT token. Then, it's possible to get
data sending a request to the secured endpoint providing
this JWT.

If no JWT provided, then it would be impossible to hit
the secured endpoint.

The data sent from the front-end form is validated and
if either username or password isn't provided (or both of them),
the user gets the appropriate warning message.

## Dependencies
- "dotenv" v.16.3.1
- "express" v.4.18.2
- "nodemon" v.3.0.1 (dev dependency)
- "express-async-errors" v.3.1.1
- "http-status-codes" v.2.2.0
- "jsonwebtoken" v.9.0.1

## Installation

In terminal, go to the directory you want to import the project to. Type the next command:
```bash
git clone https://github.com/perseverance50k/jwt-basics.git
```

Open the project in your code editor and type the command provided below to install all the required dependencies:
```bash
npm install
```
Create the `.env` file in the root directory of the project and add the following property:
```bash
JWT_SECRET=YOUR_JWT_SECRET
```

Note that you have to replace the `YOUR_JWT_SECRET` with your actual data.
It's recommended to use one of reliable hashing algorithms to create this secret.
For example, SHA-256.

## Usage

### Endpoints
- GET /api/v1/login/ – public route
- GET /api/v1/dashboard/ – secured route

### Starting

Type the following command to start the application:
```bash
npm run start
```

### Demo

Go to `localhost:3000` and you should see something like this:

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
