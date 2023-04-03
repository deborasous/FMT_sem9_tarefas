import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { TodoProvider } from "./context/Contexts";

function App() {
  return (
    <>
      <Header />
      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  );
}

export default App;
