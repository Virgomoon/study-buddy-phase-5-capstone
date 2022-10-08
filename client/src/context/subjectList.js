import { createContext, useMemo } from 'react'
import { useState } from 'react';

const SubjectContext = createContext();

const SubjectProvider = (props) => {
    const [ subjectList, setSubjectList ] = useState([])

    const value = useMemo(
        () => ({ 
            subjectList, setSubjectList
            
        }), [subjectList]
        )

    return (
        <SubjectContext.Provider value={value}>
            {props.children}
        </SubjectContext.Provider>
    )
}

export { SubjectContext, SubjectProvider }