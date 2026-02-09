🚀 Google OAuth Lead Registration App

A full-stack web application that allows users to sign in with Google OAuth, submit lead details, and securely store them in MongoDB.
The project demonstrates a complete authentication flow using Google Identity Services, React, Express, and MongoDB.

🔗 Live Demo

Frontend (Vercel):
👉 https://landing-page-frontend-lemon.vercel.app/

Backend API (Render):
👉 https://landingpage-backend-c258.onrender.com

🛠️ Tech Stack
Frontend

React

@react-oauth/google

Axios

CSS (custom styling)

Vercel (deployment)

Backend

Node.js

Express.js

MongoDB + Mongoose

google-auth-library

CORS

Render (deployment)


✨ Features

Google Sign-In using OAuth 2.0

Secure ID token verification on backend

Lead submission form (name & phone)

MongoDB persistence

Duplicate prevention using Google ID

Clean and professional UI

Fully deployed frontend & backend

🔐 Authentication Flow (How it works)

User signs in using Google Login on the frontend.

Google returns an ID token to the client.

Frontend sends the token along with form data to the backend.

Backend verifies the token using google-auth-library.

User details are extracted from the verified token.

Lead data is saved in MongoDB.

Success response is returned to the client.

This approach avoids redirect-based OAuth and uses a modern, secure token verification flow.

⚙️ Environment Variables
Backend (.env)

PORT=5000
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id

Frontend (.env)
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_API_URL=https://landingpage-backend-c258.onrender.com

▶️ Run Locally
Backend

npm install
npm run dev

Frontend

npm install
npm run dev

📌 Notes

Redirect URIs are configured in Google Cloud Console but not used in the token-based flow.

OAuth secrets are never exposed on the frontend.

Backend verifies every Google token before processing requests.

👤 Author

Ash Bagda
