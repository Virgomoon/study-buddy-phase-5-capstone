import { useState, createContext, useMemo } from 'react'

const UserContext = createContext();

const UserProvider = (props) => {
    const [username, setUsername] = useState("")
    const [id, setId] = useState("");

    const value = useMemo(
        () => ({ 
            username, setUsername,
            id, setId 
        }), [username ,id]
        )

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }