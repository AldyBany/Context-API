import BookList from "./Components/BookList";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/Theme";
import "./styles.css";

export default function App() {
  return (
    <div className="App">

      <ThemeContextProvider>
        <AuthContextProvider> 
          <Navbar />
          <BookList />
          <Button/>
        </AuthContextProvider> 
      </ThemeContextProvider>
    </div>
  );
}
