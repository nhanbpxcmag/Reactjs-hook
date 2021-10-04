import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Todo from "./components/Todo";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ThemeToggle />
        <AuthContextProvider>
          <Navbar />
          <TodoContextProvider>
            <Todo />
          </TodoContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
