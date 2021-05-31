import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Landing from "./components/Landing";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Libre Baskerville",
    // fontWeightRegular: 400,
    // // fontWeightRegular: 600,
    // fontWeightBold: 700,
    h2: {
      fontWeight: 700,
      color: "#0000AE",
      fontSize: "40px",
    },
    h5: {
      fontStyle: "italic",
      fontSize: "24px",
    },
    h6: {
      fontWeight: 700,
      fontSize: "16px",
    },
    body1: {
      fontSize: "14px",
    },
    button: {
      fontStyle: "italic",
      fontSize: "12px",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Landing />
      </div>
    </ThemeProvider>
  );
}

export default App;
