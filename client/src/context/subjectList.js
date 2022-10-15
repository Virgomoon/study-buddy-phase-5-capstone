import { createContext, useMemo, useEffect } from 'react'
import { useState } from 'react';

const SubjectContext = createContext();

const SubjectProvider = (props) => {
    const [ subjectList, setSubjectList ] = useState([])

    async function getSubjects(){
    
        const r = await fetch("/subjects");
        const data = await r.json();
        return data;
      }
    
      useEffect(() => {
          getSubjects().then(function(result) {
            setSubjectList(result);
        });
        
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