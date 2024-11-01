import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
