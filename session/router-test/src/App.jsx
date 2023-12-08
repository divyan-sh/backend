import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import Layout from "./Layout";
import Login from "./Login";
import RequireAuth from "./middleware/RequireAuth";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="about"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
          />
          {/* <Route path='settings' element={<Settings/>}>
            <Route index element={<GeneralSettings/>}/>
            <Route path='user' element={<UserSettings/>}/>

          </Route> */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
