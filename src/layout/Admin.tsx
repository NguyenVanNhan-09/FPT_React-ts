import { Outlet } from "react-router-dom";
import Dashboard from "../page/Dashboard";

const Admin = () => {
   return (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
         <div className="rounded-lg h-full">
            <Dashboard />
         </div>
         <div className="rounded-lg lg:col-span-3">
            <Outlet />
         </div>
      </div>
   );
};

export default Admin;
