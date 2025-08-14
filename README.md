# CollabCart Application

CollabCart is a collaborative shopping list application that allows users to create, manage, and share shopping lists in real-time. This project is built using Node.js for the backend and React for the frontend, providing a seamless user experience.

## Features

- **Real-time Collaboration**: Users can see updates to the shopping list in real-time using WebSocket connections.
- **Persistent Data Storage**: All lists and items are stored in a database, ensuring data is retained across sessions.
- **Multiple Lists Management**: Users can create and manage multiple shopping lists, each accessible via a unique URL.
- **User-Friendly Interface**: The frontend is designed with a clean and intuitive interface for easy navigation and interaction.

## Project Structure

```
collabCart-app
├── backend
│   ├── controllers        # Contains request handlers for lists
│   ├── models             # Defines data models for the application
│   ├── routes             # API routes for list operations
│   ├── services           # WebSocket service for real-time updates
│   ├── app.js             # Initializes the Express application
│   ├── server.js          # Starts the server
│   └── config             # Database configuration
├── frontend
│   ├── public             # Static files for the frontend
│   └── src                # React components and application logic
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── .env                   # Environment variables
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd collabCart-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory and add your database connection string and any other necessary environment variables.

5. Start the backend server:
   ```
   cd backend
   node server.js
   ```

6. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

## Usage

- Access the application in your web browser at `http://localhost:3000`.
- Create a new list or join an existing one using the unique URL.
- Collaborate with others in real-time by sharing the list URL.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.