import "./App.css";
import RouteMap from "./components/RouteMap";
import Sidebar from "./components/Sidebar";
import WaypointProvider from "./providers/waypoint-provider";

export default function App() {
  return (
    <WaypointProvider>
      <div className="app-container">
        <Sidebar />
        <RouteMap />
      </div>
    </WaypointProvider>
  );
}
