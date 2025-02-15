<h1>Redux Counter App with Theme Context</h1>
    <p>This project is a simple counter application built using React, Redux Toolkit, and Context API for theme management.</p>
    
  <h2>Features</h2>
    <ul>
        <li>Increment, decrement, and reset the counter.</li>
        <li>Manage theme (light/dark mode) using Context API.</li>
        <li>Adjust font size dynamically.</li>
        <li>Utilizes Redux Toolkit for state management.</li>
    </ul>


  <h2>ScreenShot and video </h2>





https://github.com/user-attachments/assets/5cf00727-c97c-4fe9-8c3a-23f6081b2b33





  
  ![Screenshot 2025-02-15 175739](https://github.com/user-attachments/assets/0a8cfcb1-8701-40d0-ac7e-8d16d7ea9d7a)

  
![Screenshot 2025-02-15 175551](https://github.com/user-attachments/assets/726f9d96-1d60-4190-8eb9-23f8342b9fb1)


![Screenshot 2025-02-15 175542](https://github.com/user-attachments/assets/89f065f2-a183-4534-a570-2d967c5b3121)


  <h2>Installation</h2>
    <pre>
    git clone &lt;repository-url&gt;
    cd redux-counter-app
    npm install
    npm start
    </pre>
    <p>This will start the development server and open the app in your browser.</p>
    <h2>Project Structure</h2>
    <pre>
    /src
    ├── components
    │   ├── Counter.jsx
    ├── context
    │   ├── ThemeContext.jsx
    ├── store
    │   ├── store.js
    ├── slices
    │   ├── counterSlice.js
    ├── App.jsx
    ├── index.js
    </pre>
    <h2>Usage</h2>
    <p>The application consists of a counter component that allows users to increase or decrease the count and toggle the theme.</p>
    <h3>Counter Actions</h3>
    <ul>
        <li><strong>Increment:</strong> Adds 1 to the counter.</li>
        <li><strong>Decrement:</strong> Subtracts 1 from the counter.</li>
        <li><strong>Reset:</strong> Resets the counter to zero.</li>
        <li><strong>Toggle Theme:</strong> Switches between light and dark mode.</li>
        <li><strong>Toggle Font Size:</strong> Switches between medium and large font sizes.</li>
    </ul>
    <h2>Implementation Details</h2>
    <h3>Redux Store (store.js)</h3>
    <pre>
    import { configureStore } from "@reduxjs/toolkit";
    import counter from "../Slices/counterSlice";
    export const store = configureStore ({
        reducer:{
            counter: counter,
        }
    })
    </pre>
        <h3>Counter Slice (counterSlice.js)</h3>
    <pre>
    import { createSlice } from "@reduxjs/toolkit";

  const counterSlice = createSlice({
        name: 'counter',
        initialState:{ value: 0 },
        reducers:{
            increment: state => { state.value += 1; },
            decrement: state => { if(state.value > 0) state.value -= 1; },
            reset: state => { state.value = 0; }
        }
    });

  export const { increment, decrement, reset } = counterSlice.actions;
    export default counterSlice.reducer;
    </pre>
    <h3>Theme Context (ThemeContext.jsx)</h3>
    <pre>
    import { createContext, useContext, useReducer } from "react";
        const ThemeContext = createContext();
    const themeReducer = (state, action) => {
        switch (action.type) {
            case "TOGGLE_THEME": return { ...state, isDark: !state.isDark };
            case "SET_FONT_SIZE": return { ...state, fontSize: action.payload };
            default: return state;
        }
    };
    
  const initialState = { isDark: false, fontSize: "medium" };
    export const ThemeProvider = ({ children }) => {
        const [state, dispatch] = useReducer(themeReducer, initialState);
        return (
            <ThemeContext.Provider value={{ state, dispatch }}>
                {children}
            </ThemeContext.Provider>
        );
    };
    export const useTheme = () => useContext(ThemeContext);
    </pre>

  <h2>Running the App</h2>
    <pre>
    npm start
    </pre>
    <p>This will launch the app on <code>http://localhost:3000</code>.</p>
    <h2>Conclusion</h2>
    <p>This project demonstrates how to integrate Redux Toolkit and Context API in a React application. It is a good starting point for learning state management in React.</p>
