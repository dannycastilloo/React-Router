## Application

![Captura de pantalla 2023-08-24 192700](https://github.com/dannycastilloo/React-Router/assets/76531494/b0ba75d5-d519-49c4-8c38-c2752dc03664)

![Captura de pantalla 2023-08-24 192725](https://github.com/dannycastilloo/React-Router/assets/76531494/7ea937c3-b022-4754-b56e-c461ac931a67)

## Description
This is a web application, which uses react-router-dom for the navigation. More characteristics:
- Allows the user to submit data
- Saves the user context to each page

## Information
- Context is important because it makes certain information available from one layer down
- Example of Context -> Login: The user has to be logged in each component
- An state could be global or just for a specific sector
- Single Page Application (SPA): Web app that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.

## Steps to follow
- Download react router dom -> npm install react-router-dom
- Import BrowserRouter in main.jsx
- Implement Route and Routes in App.jsx
- Use Link and NavLink in the App Navigation Bar
- Create the context (use React's function createContext())
- Create the provider and call the Context.Provider, which contains the {children}

This project was initialized with React + Vite.
