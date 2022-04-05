// import { createContext, useState } from "react";
// import { Signup } from "./components/Signup";
import {Box} from "@mui/material"
import { BoxComponent } from "./components/BoxComponent"
import { ReadingTheme } from "./components/ReadingTheme";
import { ThemeProvider } from "./ThemeContext";


function App() {


  return (
    <ThemeProvider>
      <Box
        sx={{
          minHeight:"100vh",
          display:"flex",

        }}
      >
        {/* <Box
              sx={{
                  minWidth:"400px",
                  maxWidth:"400px",
                  margin:"auto",
                  border:"1px solid grey",
                  padding:"20px",
                  borderRadius:"10px",
              }}
          >
          <Signup/>
        </Box> */}
      <BoxComponent/>
      <ReadingTheme/>

      </Box>
    </ThemeProvider>
  );
}

export default App;
