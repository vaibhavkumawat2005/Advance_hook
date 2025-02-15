import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Slices/counterSlice";
import { useTheme } from "../context/ThemeContext";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const {
    state: { isDark, fontSize },
    dispatch: themeDispatch,
  } = useTheme();

  const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const toggleTheme = useCallback(() => {
    themeDispatch({ type: "TOGGLE_THEME" });
  }, [themeDispatch]);

  const toggleFontSize = useCallback(() => {
    themeDispatch({ type: "SET_FONT_SIZE", payload: fontSize === "large" ? "medium" : "large" });
  }, [themeDispatch, fontSize]);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const style = {
    backgroundColor: isDark ? "#222" : "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    fontSize: fontSize === "large" ? "1.5rem" : "1.2rem",
    color: isDark ? "#fff" : "#222",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "fit-content",
    margin: "auto",
  };

  const buttonContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  };

  const buttonStyle = {
    padding: "10px 15px",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    transition: "0.3s",
  };

  return (
    <div style={style}>
      <h1>Counter: {count}</h1>
      <div style={buttonContainer}>
        <button style={{ ...buttonStyle, backgroundColor: "red", color: "white" }} onClick={handleDecrement}>
          Decrement
        </button>
        <button style={{ ...buttonStyle, backgroundColor: "green", color: "white" }} onClick={handleIncrement}>
          Increment
        </button>
      </div>
      <p>Double: {doubleCount}</p>
      <div style={buttonContainer}>
        <button style={{ ...buttonStyle, backgroundColor: "blue", color: "white" }} onClick={toggleTheme}>
          Toggle Theme
        </button>
        <button style={{ ...buttonStyle, backgroundColor: "purple", color: "white" }} onClick={toggleFontSize}>
          Toggle Font Size
        </button>
      </div>
    </div>
  );
}

export default Counter;
