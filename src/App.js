import { Signup } from "./components/Signup";
import {Box} from "@mui/material"
import { AuthProvider } from "./contexts/AuthContext";



function App() {


  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
