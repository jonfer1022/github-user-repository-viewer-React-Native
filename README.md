# React Native GitHub Viewer

This project is a React Native application built using the React Native CLI (not Expo) that allows users to validate and view public GitHub users and repositories by interacting with the GitHub API.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)

## Features

- **State Management with Redux Toolkit:** The application uses Redux Toolkit for managing the states of components efficiently.
- **API Communication with Axios:** Axios is used to communicate with the GitHub API to retrieve user and repository data.
- **Custom User Token:** The app requires a GitHub User Token with specific permissions to authenticate API requests.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version >= 14.x)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-native-github-viewer.git
   cd react-native-github-viewer.

   ```

2. **Install dependences:**

   ```bash
   npm install #or
   yarn install
   ```

   If you want to run the project on IOS devices is need to execute the next script.

   ```bash
   npm run pod
   ```

3. **Create a Github user token:**
   - Navigate to GitHub Personal Access Tokens.
   - Generate a new token with at least the following permissions checked:
     - Full control of private repositories
     - Update All user data
4. **Create a .env file:**
   - In the root of the project, create a .env file.
   - Add your GitHub User Token to the file:
   ```bash
   GITHUB_USER_TOKEN=your_github_token_here
   ```
5. **Run the application:**

   ```bash
   npm run start
   #or
   yarn start

   #if you want run the project in a specific OS, run the next script:
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Project Structure

The project is organized as follows:

- **src/**: The main source directory containing all the application code.
  - **components/**: Contains reusable UI components.
    - **basics/**: Includes basic, reusable components such as buttons, text fields, etc.
    - **layout/**: Contains higher-order components (HOCs) and layout-specific components used across different views.
    - **specific/**: Houses components designed for specific functionalities or features within the app.
  - **redux/**: Manages the global state using Redux Toolkit.
    - **reducers/**: Contains all the slice reducers responsible for managing state, such as `user.reducer`, `auth.reducer`, `repository.reducer`.
    - **store.js**: This file configures the Redux store, combining all slices and middleware.
  - **utils/**: Contains utility functions and configurations to assist with application development.
    - **axios/**: Axios instance configuration for making API requests.
    - **endpoints/**: Defines API endpoints used throughout the app.
    - **interfaces/**: TypeScript interfaces for ensuring strong typing.
    - **styles/**: Centralized management of styles used across the application.
    - **types/**: Custom types and definitions used across the project.
  - **views/**: Contains the main views of the application.
    - **Landing/**: The initial landing page for the app.
    - **Users/**: Displays a list of GitHub users fetched from the API.
    - **HomeRoot/**: Serves as the main layout for authenticated users, handling routing within the logged-in section of the app.
    - **Repositories/**: Shows a list of public repositories fetched from GitHub.
  - **Router.tsx**: Handles the routing logic, determining which views to display based on the user's authentication status.
  - **App.tsx**: The root file of the project where libraries such as Redux are configured and integrated into the application.

## Usage

- Viewing Users and Repositories: Once you have set up your GitHub token and started the application, you can use the app to search for GitHub users and explore their public repositories.
- Authentication: The app requires you to authenticate using the GitHub User Token stored in the .env file to access the GitHub API.
