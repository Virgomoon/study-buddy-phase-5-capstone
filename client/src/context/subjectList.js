import { createContext, useMemo, useEffect } from 'react'
import { useState } from 'react';

const SubjectContext = createContext();

const SubjectProvider = (props) => {
    const [ subjectList, setSubjectList ] = useState([])

    async function getSubjects(){
    
        const res = await fetch("/subjects").then((r) => r.json());
        // const data = await r.json();
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