import { createContext, useMemo, useEffect  } from 'react'
import useState from 'react-usestateref'

const UserContext = createContext();

const UserProvider = (props) => {
    const [currentUser, setCurrentUser, currentUserRef] = useState([])

    const getCurrentUser = async () => {
        let response = await fetch("/me").then((r) => r.json());
        setCurrentUser(response);
      };
    
      useEffect(() => {
        getCurrentUser();
      }, []);

    const value = useMemo(
        () => ({ 
            currentUser, setCurrentUser, currentUserRef
            
        }), [currentUser, currentUserRef]
        )

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }