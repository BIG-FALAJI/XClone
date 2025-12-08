import { Suspense } from "react";
import "./App.css";
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router";
import { allRoutes } from "./routes/route";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading.....</div>} />

      <Layout>
        <Routes>
          {allRoutes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
