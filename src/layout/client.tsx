import React from "react";
import { Outlet } from "react-router-dom";

const Client = () => {
   return (
      <div className="max-w-screen-xl mx-auto">
         <Outlet />
      </div>
   );
};

export default Client;
