import { useState, createContext, useMemo } from 'react'

const UserContext = createContext();

const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState("")
    const [id, setId] = useState("");

    const value = useMemo(
        () => ({ 
            currentUser, setCurrentUser,
            id, setId 
        }), [currentUser ,id]
        )

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }