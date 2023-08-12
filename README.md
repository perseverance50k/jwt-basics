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

<img width="749" alt="Screenshot 2023-08-12 at 8 38 49 AM" src="https://github.com/perseverance50k/jwt-basics/assets/55809302/e3ad5d4f-a8ea-45c7-b5c5-4a57504d2dd1">

**Important:** This form is NOT intended to implement the actual login or registration. The data sent from this form is just used to create
JWTs.

Try to hit the "Submit" button and send an empty form. You will see an appropriate warning:

<img width="424" alt="Screenshot 2023-08-12 at 8 41 45 AM" src="https://github.com/perseverance50k/jwt-basics/assets/55809302/7f0ae834-d3b0-4246-9989-2dedc03181b3">

Try to hit the "Get Data" button and you won't receive the secret data since you don't have a JWT:

<img width="440" alt="Screenshot 2023-08-12 at 8 42 44 AM" src="https://github.com/perseverance50k/jwt-basics/assets/55809302/08b75c06-6c4d-4e80-81fc-ca3726669c5a">

Now, let's send some data from the form:

<img width="414" alt="Screenshot 2023-08-12 at 8 43 55 AM" src="https://github.com/perseverance50k/jwt-basics/assets/55809302/4655eec7-b37b-4fa7-af14-cb293091c287">

Note the messages that appear after the form submission: *User Created* and *Token Present* (previously there was a message *No Token Present*):

<img width="422" alt="Screenshot 2023-08-12 at 8 44 07 AM" src="https://github.com/perseverance50k/jwt-basics/assets/55809302/e5fe88d8-c88c-4703-b74b-554dedd80b8d">

What just happened? We sent a request from the front-end to the back-end using the **axios** library, created the JWT on the back-end and returned it to the front-end and saved to the local storage of the browser. In Google Chrome, right-click on random place of the page -> Inspect -> Application -> Storage/Local Storage:

<img width="838" alt="Screenshot 2023-08-12 at 8 49 31 AM" src="https://github.com/perseverance50k/jwt-basics/assets/55809302/da7db081-cb6a-48e8-ad7e-d6eb8c2d3a35">

Now, if we try to hit the "Get Data" button, we will receive this data (in our case it's just a random number between 0 and 100 just for
demo purposes):

<img width="550" alt="Screenshot 2023-08-12 at 8 50 44 AM" src="https://github.com/perseverance50k/jwt-basics/assets/55809302/7eb9ca35-8d07-49d1-ac1a-bf257d204749">

After you learned how the application works, try to delete the generated token from the local storage and see that the `/dashboard` route
is no longer accessible!

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
