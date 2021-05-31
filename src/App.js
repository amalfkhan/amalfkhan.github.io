import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Landing from "./update/Landing";

const theme = createMuiTheme({
  typography: {
    pageTitle: {
      fontFamily: "Playfair Display",
      fontWeight: 700,
      fontSize: 42,
    },
    pageSubtitleSans: {
      fontFamily: "Montserrat",
      fontSize: 15,
      fontWeight: 400,
    },
    pageSubtitleSerif: {
      fontFamily: "PT Serif",
      fontSize: 15,
    },
    categoryHeading: {
      fontFamily: "Playfair Display",
      fontWeight: 600,
      fontSize: 28,
      textAlign: "center",
    },
    categorySubHeading: {
      fontFamily: "Playfair Display",
      fontWeight: 500,
      fontSize: 20,
    },
    paragraph: {
      fontFamily: "PT Serif",
      fontSize: 14,
    },
    altParagraph: {
      fontFamily: "Montserrat",
      fontSize: 12,
      // fontStyle: "italic",
    },
    hashtag: {
      fontFamily: "Montserrat",
      fontSize: 12,
      fontWeight: 600,
      "&:hover": {
        backgroundColor: "#fff",
        textDecoration: "underline",
      },
    },
    textButton: {
      fontFamily: "Montserrat",
      fontSize: 11,
      "&:hover": {
        backgroundColor: "#fff",
        textDecoration: "underline",
      },
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
