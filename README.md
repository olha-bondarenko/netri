# Netri

This project was created as a platform for people from all over the world to share their favorite hidden places in Ukraine. 
The main purpose of it is that users can upload pictures of their favorite places and write some additional information about it. 
Users are able to edit and delete their posts and to like/unlike own and other's posts. 
This app was made with React v18, Redux, Node.js, Express.js and styled with Material UI.


## Development server

Run `npm install` and `npm start` in the frontend directory to run client side and `npm install` followed by `npm start` in the backend directory to start a dev server. Navigate to `http://localhost:3000/` for cleind part and `http://localhost:5000/` for server side. The application will automatically reload if you change any of the source files. The live version of the app can be found <a href="https://netri-ua.herokuapp.com" target="_blank">here</a>.

## Build

Run `npm run prebuild` in the root folder to prepare the build and `npm run build` after. The build artifacts will be stored in the `built/` directory and client side in `built/public`.

## Running unit tests

Unit tests will be added in the nearest future.

## Further steps

- improve pagination and posts listing
- improve UX for the 'serach by tag' section
- add unit tests
- test for different browsers compatibility
