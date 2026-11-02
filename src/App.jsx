
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Compass, MapPin, CalendarDays, PlusCircle, User } from "lucide-react";
import Discover from "./pages/Discover";

function Placeholder({ title }) {
  return (
    <main style={{ padding: "24px" }}>
      <h1>{title}</h1>
      <p>This feature is under development.</p>
    </main>
  );
}

export default function App() {
  const menu = [
    { path: "/", label: "Discover", icon: Compass },
    { path: "/map", label: "Map", icon: MapPin },
    { path: "/events", label: "My Events", icon: CalendarDays },
    { path: "/create", label: "Create Event", icon: PlusCircle },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <h2>MeetUp</h2>
          <p>Meet people. Do things. Feel at home.</p>
        </header>

        <nav className="navigation">
          {menu.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/map" element={<Placeholder title="Event Map" />} />
          <Route path="/events" element={<Placeholder title="My Events" />} />
          <Route path="/create" element={<Placeholder title="Create Event" />} />
          <Route path="/profile" element={<Placeholder title="My Profile" />} />
          <Route path="/login" element={<Placeholder title="Login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
