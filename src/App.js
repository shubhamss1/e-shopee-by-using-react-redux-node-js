import React from "react";
import { Grid,Card,CardContent } from "@mui/material";
import { Landing } from "./components/Landing";

function App(){
  return(
   < React.Fragment>
     <Card>
      <CardContent>
         <Landing/>
      </CardContent>
     </Card>
   </React.Fragment>
  )
}

export default App;
