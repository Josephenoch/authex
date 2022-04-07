import { Signup } from "./components/Signup";
import {Box} from "@mui/material"
import { AuthProvider } from "./contexts/AuthContext";

import {Routes, Route} from "react-router-dom"
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoutes } from "./PublicRoutes";
import {makeStyles, useTheme} from "@mui/styles"
import { ForgotPassword } from "./components/ForgotPassword";


const useStyles = makeStyles({
  root:{
    minHeight:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"

  },
})

function App() {
  // const theme = useTheme()
  const classes = useStyles()
  return (
      <AuthProvider>
        <Box
          className={classes.root}>
         
              <Routes>
                  <Route index element={
                    <PublicRoutes>
                      <Signup/>
                    </PublicRoutes>
                  }/>
                  <Route path="/login"element={
                    <PublicRoutes>
                      <Login/>
                    </PublicRoutes>
                  }/>
                  <Route path="/forgot-password"element={
                    <PublicRoutes>
                      <ForgotPassword/>
                    </PublicRoutes>
                  }/>
                  <Route path="/dashboard"element={
                    <ProtectedRoute>
                      <Dashboard/>
                    </ProtectedRoute>
                  }/>


              </Routes>
         

        </Box>
      </AuthProvider>
  );
}

export default App;
