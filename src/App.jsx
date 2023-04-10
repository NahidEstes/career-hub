import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="bg-zinc-50">
        <Header />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
