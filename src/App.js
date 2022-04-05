import { Signup } from "./components/Signup";
import {Box} from "@mui/material"

function App() {
  return (
    <Box
      sx={{
        minHeight:"100vh",
        display:"flex",
        
      }}
    >
      <Box
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
      </Box>
    </Box>
  );
}

export default App;
