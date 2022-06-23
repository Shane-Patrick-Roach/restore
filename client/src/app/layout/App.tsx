import Catalog from "../../features/catalog/Catalog";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { Container } from "@mui/system";
import { useState } from "react";
import { Route} from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';


  const theme = createTheme({
    palette: {
      mode: paletteType
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode)
  }


  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right'/>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/catalog'>
          <Catalog />
        </Route>
        <Route path='/catalog/:id'>
          <ProductDetails />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
      </Container>
    </ThemeProvider>
  )
}

export default App;
