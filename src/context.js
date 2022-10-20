import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const projectsArr = require("../projects.json");
  const [projects, setProjects] = useState(projectsArr);
  return (
    <Context.Provider value={[projects, setProjects]}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
