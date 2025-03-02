# Airbnb Booking Full-Stack App

## Description

This is a full-stack web application for booking vacation rentals, inspired by Airbnb. Built with React for the frontend and an API for the backend, it allows users to browse listings, book accommodations, and manage reservations.

## Features

- User authentication (Signup/Login)
- Browse available listings
- View property details
- Book accommodations
- Manage reservations
- Responsive design for mobile and desktop

## Technologies Used

### Frontend:

- React.js
- React Router
- Tailwind CSS (or any other CSS framework used)

### Backend:

- Node.js & Express.js 
- Database MongoDB
- Authentication (JWT, OAuth)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/airbnb-booking-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd airbnb-booking-app
   ```
3. Install dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```
4. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```
5. Set up environment variables for API keys and database connections.
6. Start the backend server:
   ```bash
   npm run dev
   ```
7. Start the frontend:
   ```bash
   npm start
   ```
8. Open the app in your browser at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint           | Description                     |
| ------ | ------------------ | ------------------------------- |
| GET    | /api/hotels        | Get all available hotels        |
| GET    | /api/hotels/:id    | Get details of a specific hotel |
| POST   | /api/hotels        | Create a Hotel                  |
| PUT    | /api/hotels/\:id   | Update hotel properties         |
| POST   | /api/auth/register | Register a new user             |
| POST   | /api/auth/login    | User authentication             |

## Deployment

- Frontend deployed on: Vercel
- Database hosted on: MongoDB Atlas

## Future Improvements

- Payment integration
- Reviews and ratings system
- Host dashboard for listing management


