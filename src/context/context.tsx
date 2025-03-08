import React, { createContext, FC, ReactElement } from "react";

export const MyContext = createContext(null);

function ProvidingData({ children }:{children:React.ReactElement}) {
    const userScreen_h:number = window.innerHeight; // height of Whatever users screen

    return (
        <MyContext.Provider value={{userScreen_h}}>{children}</MyContext.Provider>
    )
}
export default ProvidingData;