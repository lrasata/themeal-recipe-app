import './App.css'

import {createTheme, ThemeProvider} from "@mui/material";
import SearchBar from "./components/search-bar";

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
          <SearchBar searchText={'this is a text'} helperText={'helper text'}/>
      </ThemeProvider>
  )
}

export default App
