# Modernized Zengo Test Project

This project is a modernization of the previous `zengo_test` repository, utilizing a more modern tech stack. The frontend has been upgraded to use Vue 3 with Vuetify for the UI components and Pinia for state management. The backend has been refactored to use Node.js, Express, and MongoDB.

### Technologies Used

- **Frontend**:
    - [Vue 3](https://v3.vuejs.org/) : Leveraging Vue's Composition API for a more organized and flexible component structure.
    - [Vuetify](https://vuetifyjs.com/) : Using Vuetify's material design components for consistent and modern UI styling.
    - [Pinia](https://pinia.vuejs.org/) : Replacing Vuex with Pinia for more intuitive state management.

- **Backend**:
    - [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) : Providing a fast and minimalistic backend server setup.
    - [MongoDB](https://www.mongodb.com/) : Utilizing MongoDB for a scalable, NoSQL database solution.

## Project Structure

The project is divided into two main directories:

- **frontend/**: Contains the Vue 3 application, including components, stores, and services for interacting with the backend.
- **backend/**: Contains the Node.js Express server, including routes, controllers, services, and database models.

For detailed setup and configuration, please refer to the original setup instructions in the previous `zengo_test` project.

## Setting Up The Backend

### Setting Up with Docker

To set up the project using Docker, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. **cp .env_sample .env**
3. **Fill in the Environment Variables**:
   Edit the .env file and fill in the necessary values for MongoDB connection, ports, and any other required settings.
4. **Build and Run the Containers:** Execute the following command to build and start the containers:
    ```bash
   docker-compose up -d --build
   ```

5. **Install Dependencies and Start the Node Server:** After the containers are running, execute the following command to install npm packages inside the Node container and start the server:
   ```bash
   docker exec -it mevn_auth_node npm install
   docker exec -it mevn_auth_node node server.js
   ```
6. **Access the Application:**
    - Node.js API: http://localhost:8085
    - Mongo Express: http://localhost:8081    

### Setting Up without Docker

To set up the project without using Docker, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. **cp .env_sample .env**
3. **Fill in the Environment Variables**:
   Edit the .env file and fill in the necessary values for MongoDB connection, ports, and any other required settings.
4. **Install Dependencies:** Ensure you have Node.js and MongoDB installed. Run the following command to install the necessary packages:
   ```bash
   npm install
   ```
5. **Run MongoDB:** Start the MongoDB service. Ensure it's running and accessible.
6. **Start the Node.js Application:** Run the following command to start the server:
   ```bash
   node server.js
   ```
7. **Access the Application:**
    - Node.js API: http://localhost:5000

