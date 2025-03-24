import './App.css'

import {createTheme, ThemeProvider} from "@mui/material";
import MainContainer from "./containers/main-container";

const theme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
});

function App() {

  return (
      <ThemeProvider theme={theme}>
            <MainContainer />
      </ThemeProvider>
  )
}

export default App
