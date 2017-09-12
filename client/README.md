# Address Book - Client

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

The client provides a rudimentary CRUD interface to view and update the Address Book

It is written in JavaScript (Node.js 6.10.3) using React with Redux, Router & Forms extensions.

Install the dependencies:

```
npm install
```

The server runs in development mode by default. The steps to create a production build are details in the docs for create-react-app linked above.

The development server should not require any additional configuration unless you modify the server configuration to serve the Api on a different host:port. In that case modify the ```proxy``` setting in ```package.json``` to provide the correct URL

The development server is started with npm (or yarn):

```
npm start
```

The client will be served on port 3000 by default (it will find the next available port if that is already in use):

```
http://localhost:3000
```