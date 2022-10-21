import { createContext, useMemo, useEffect } from 'react'
import { useState } from 'react';

const SubjectContext = createContext();

const SubjectProvider = (props) => {
    const [ subjectList, setSubjectList ] = useState([])

     const getSubjects = async() => {
        let res = await fetch("/subjects").then((r) => r.json());
        setSubjectList(res);
      }
    
      useEffect(() => {
          getSubjects()
      }, []);

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