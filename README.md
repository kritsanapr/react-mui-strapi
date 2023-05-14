# React MUI Strapi Project

This is a sample project showcasing the integration of React, Material-UI (MUI), and Strapi. It provides a starting point for building a web application with a frontend in React, using Material-UI for UI components and Strapi as a headless CMS (Content Management System) for managing data.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/kritsanapr/react-mui-strapi.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-mui-strapi
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

### Strapi Setup

Before running the project, you need to set up and configure Strapi. Strapi will serve as the backend for managing content.

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install the Strapi dependencies:

   ```bash
   npm install
   ```

3. Set up your database connection by creating a `.env` file based on the provided `.env.example` file. Replace the `DATABASE_USERNAME`, `DATABASE_PASSWORD`, and `DATABASE_NAME` placeholders with your database credentials.

4. Run the Strapi development server:

   ```bash
   npm run develop
   ```

   This will start the Strapi server and provide you with a local API endpoint for managing content.

   > **Note:** Make sure the Strapi server is running in the background while working on the React frontend.

### React Frontend

The React frontend is responsible for displaying the data managed by Strapi.

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Start the React development server:

   ```bash
   npm start
   ```

   This will start the React app and open it in your default browser. You can view the app and make changes to the frontend code. Any changes will be automatically reflected in the browser.

## Contributing

Contributions are welcome! If you find any issues or want to suggest improvements, please create an issue or submit a pull request.

## License