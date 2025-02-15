import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "./context/ThemeContext";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Counter/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;