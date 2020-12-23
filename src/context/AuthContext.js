import React, {useState} from 'react'

const Context = React.createContext({})

export function AuthContextProvider ({children}){

    const [authData, setAuthData] = useState({
        token: localStorage.getItem("auth-token"),
        user: localStorage.getItem("auth-user"),
      });
    

    return <Context.Provider value={{authData,setAuthData}}>
        {children}
    </Context.Provider>
}

export default Context