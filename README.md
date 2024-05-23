# Notes App

## Description
This Notes App is a web application built to manage personal notes. It allows users to create, read, update, and delete notes. The application is developed using Node.js, Express.js, MongoDB, and EJS for server-side rendering, ensuring a robust and efficient stack for handling dynamic content and data management.

## Tech Stack
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine. It is used for building the server-side of the application.
- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js. It is used for building the web server and handling routing.
- **MongoDB**: A NoSQL database that stores data in flexible, JSON-like documents. It is used for storing notes and user information.
- **EJS (Embedded JavaScript)**: A simple templating language that lets you generate HTML markup with plain JavaScript. It is used for server-side rendering of dynamic web pages.

## Features
- **User Authentication**: Secure login and signup using Google OAuth.
- **CRUD Operations**: Create, read, update, and delete notes.
- **Responsive Design**: Mobile-friendly design using Bootstrap.
- **Search Functionality**: Search through notes using keywords.
- **Dashboard**: A personalized dashboard displaying all user notes.

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/DevPatel1023/NotesApp
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**
    Create a `.env` file in the root of the project and add the following variables:
    ```env
    PORT=5000
    MONGODB_URI=your-mongodb-uri
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    SESSION_SECRET=your-session-secret
    ```

4. **Run the application**
    ```bash
    npm start
    ```

    The application should now be running on [http://localhost:5000](http://localhost:5000).

## Usage

### User Authentication
- Users can log in and sign up using their Google account.

### Creating a Note
- Navigate to the dashboard and click on "Add Note".
- Fill in the note title and content.
- Save the note to see it listed on the dashboard.

### Updating a Note
- Click on the note you want to edit.
- Modify the title and/or content.
- Save the changes.

### Deleting a Note
- Click on the delete icon next to the note you want to remove.
- Confirm the deletion.

## Contribution
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
Thanks to the developers of Node.js, Express.js, MongoDB, and EJS for providing the tools necessary to build this application.


This `README.md` provides a clear and concise overview of your project, including its purpose, the tech stack used, installation instructions, project structure, usage, contribution guidelines, and license information. Adjust the details as necessary to fit your specific application and requirements.
