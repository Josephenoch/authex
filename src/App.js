import { Signup } from "./components/Signup";
import {Box} from "@mui/material"
import { AuthProvider } from "./contexts/AuthContext";

import {Routes, Route} from "react-router-dom"
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";



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
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center"
              }}
            >
              <Routes>
                  <Route index element={<Signup/>}/>
                  <Route path="/login"element={<Login/>}/>
                  <Route path="/dashboard"element={
                    <ProtectedRoute>
                      <Dashboard/>
                    </ProtectedRoute>
                  }/>


              </Routes>
          </Box>

        </Box>
      </AuthProvider>
  );
}

export default App;
