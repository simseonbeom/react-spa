import RootLayout from "./layout/RootLayout";
import Intro from "./pages/Home/Intro";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {


  return (
    <div className="App">
      <Intro />
      <RouterProvider router={router} />
      <div className="loadingScreen"></div>
    </div>
  );
}

export default App;
