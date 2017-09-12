# Address Book - Client

The client provides a rudimentary CRUD interface to view and update the Address Book

It is written in JavaScript (Node.js 6.10.3) using React with Redux, Router & Forms extensions.

This client was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
The [Latest instructions](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) for Create React App provide much more detail of what is supported.

Install the dependencies with npm (or yarn):

```
npm install
```

The server runs in development mode by default. The steps to create a production build are details in the docs for create-react-app linked above.

The development server should not require any additional configuration. ```package.json``` defines a proxy to the Api development server so that CORS headers are not required

The development server is started with npm (or yarn):

```
npm start
```

The client will be served on port 3000 by default (it will find the next available port if that is already in use):

```
http://localhost:3000
```
