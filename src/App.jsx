import "./i18n";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useState } from "react";
import { AppStateContext } from "./context/AppStateContext";
import { NotFound } from "./components/pages/NotFound";
import { SignIn } from "./components/pages/SignIn";
import { Notifications } from "@mantine/notifications";
import Menu from "./components/pages/Menu";

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Notifications />
        <AppStateContext.Provider value={{ user, setUser, error, setError, loading, setLoading }}>
          <BrowserRouter basename="/connexa-cli/pulse">
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route exact path="/" element={<SignIn />} />
              <Route
                path="/menu/*"
                element={
                  <ProtectedRoute>
                    <Menu />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </AppStateContext.Provider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
