import {BrowserRouter} from "react-router";
import AppRoutes from "./pages/routes.tsx";
import {ScoreContextProvider} from "./context/scoreContext/scoreContextProvider.tsx";


function App() {

  return (
      <ScoreContextProvider>
          <BrowserRouter>
              <AppRoutes/>
          </BrowserRouter>
     </ScoreContextProvider>

  )
}

export default App
