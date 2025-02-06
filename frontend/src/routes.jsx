// src/routes.js
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AllergyJournal from "./components/AllergyJournal";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/journal", element: <AllergyJournal /> },
];

export default routes;
