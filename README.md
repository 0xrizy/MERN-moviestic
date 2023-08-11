# MERN-moviestic
https://github.com/0xrizy/MERN-moviestic/assets/81066183/c615da02-c021-41f7-8dd2-0b92287b5654

# MovieStic - Movie tracker

MovieStic is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. It provides users with the ability to create an account, sign in, and keep track of their favorite movies. The application integrates JWT (JSON Web Token) authentication for secure user sessions, implements route protection to ensure data privacy, and uses the OMDB API to search and add movies to the user's favorites list.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
  
## Features

- **User Registration**: Users can sign up for a MovieStic account with a unique username and password.
- **User Authentication**: Secure user authentication and authorization using JSON Web Tokens (JWT).
- **User Login/Logout**: Registered users can log in and out of their accounts.
- **Favorites List**: Users can view their list of favorite movies, complete with movie names, posters, and genres.
- **Add Movies**: Users can manually add movies to their favorites list by searching for movie titles.
- **Search Functionality**: Utilizes the OMDB API to search for movies and fetch data to add to the favorites list.
- **Route Protection**: Certain routes are protected and only accessible to authenticated users.

## Technologies Used

- **Frontend**:
  - ReactJS: A JavaScript library for building user interfaces.
  - Axios: A promise-based HTTP client for making requests to the backend API.
  - React Router: For routing and navigation within the application.

- **Backend**:
  - Express.js: A fast and minimalist web framework for Node.js.
  - MongoDB: A NoSQL database for storing user and movie data.
  - Mongoose: A MongoDB object modeling tool for Node.js.
  - JWT: JSON Web Tokens for secure authentication.
  - OMDB API: External API for fetching movie data.

## Installation

1. Clone the repository: `git clone https://github.com/0xrizy/MERN-moviestic.git`
2. Navigate to the project directory: `cd MovieStic`
3. Install backend dependencies: `cd backend && npm install`
4. Install frontend dependencies: `cd frontend && npm install`
5. Create a `.env` file in the `backend` directory and add your MongoDB connection URI and JWT secret:

`MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret`

6. Start the backend server: `cd backend && npm start`
7. Start the frontend development server: `cd ../frontend && npm start`

## Usage

1. Open your web browser and navigate to `http://localhost:3000` to access the MovieStic application.
2. Create a new account or log in using your credentials.
3. Explore your favorite movies, search for new movies, and add them to your favorites list.

## API Routes

Register a new user.
Log in an existing user.
Get the list of user's favorite movies.
Add a movie to the user's favorites list.
Search for movies using the OMDB API.


---



