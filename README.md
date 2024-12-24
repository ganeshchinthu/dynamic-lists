# Dynamic Lists Project

This project is a responsive React application designed to meet the "Dynamic Lists" assignment requirements. It features an intuitive user interface and implements efficient state management using the Context API. The application has been deployed on GitHub Pages for public access.

## Features

### 1. **Responsive Design**

- The application is fully responsive, ensuring compatibility across devices.
- Responsiveness is achieved using media queries and flex properties.

### 2. **Loading and Failure Views**

- A loading spinner is displayed during data fetching.
- If the API call fails, a failure view appears with a "Try Again" button to retry the request.

### 3. **Dynamic List Management**

- Lists are displayed in containers based on the `list_number` received from the API.
- Users can create a new list by selecting exactly two list containers.
- Arrow buttons allow users to move items between lists in the `List Creation` view.
- Options to "Cancel" or "Update" changes:
  - **Cancel:** Discards all changes and reverts to the main view.
  - **Update:** Saves changes and updates the list containers in the main view.

### 4. **State Management**

- The application uses Context API to manage state effectively across components, ensuring smooth functionality.

## How to Use

1. **Access the Application:**
   - Open the deployed application in your browser.
2. **Fetch Data:**
   - Upon launch, data is automatically fetched.
   - If the request fails, click "Try Again" to reload the data.
3. **Create a New List:**
   - Select exactly two list containers to activate the "Create a new list" button.
4. **Move List Items:**
   - Use arrow buttons to move items between the lists in the `List Creation` view.
5. **Save or Discard Changes:**
   - Click "Cancel" to discard changes or "Update" to save and return to the main view.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ganeshchinthu/dynamic-lists.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dynamic-lists
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the application in your browser at `http://localhost:5173`.

## Deployment

The application is live on GitHub Pages. Visit it here:
[Dynamic Lists on GitHub Pages](http://ganeshchinthu.github.io/dynamic-lists)

## Technologies Used

- **React.js**: For building the user interface.
- **Styled Components**: For managing component-level styling.
