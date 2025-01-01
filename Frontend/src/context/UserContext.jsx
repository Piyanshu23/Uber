import React from "react";

export const UserDataContext = React.createContext();

const UserContext = ({ children }) => {
  const user = "Piyanshu";

  return (
    <div>
      <UserDataContext.Provider value={user}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
