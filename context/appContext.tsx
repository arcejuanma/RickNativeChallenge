import React, { createContext,  useState } from 'react';

type Props = {
    children: React.ReactNode
}

type Context = {
    searchCategory: string,
    searchTerm: string,
    setSearchCategory: any,
    setSearchTerm: any
}

const initialContext: Context = {
    searchCategory: "characters",
    searchTerm: "",
    setSearchCategory: (): void => {},
    setSearchTerm: ():void => {}
}
const AppContext = createContext<Context>(initialContext);

const AppContextProvider = ({children}:Props):JSX.Element=>{
    const [contextState, setContext] = useState(initialContext)

    const setSearchCategory = (searchParam:string) => {
         setContext((prevState):Context => ({
            ...prevState,
            searchCategory: searchParam
        }))
    }

    const setSearchTerm = (newSearchTerm:string) => {
        setContext((prevState):Context =>({
            ...prevState,
            searchTerm: newSearchTerm
        }))
    }
    return (
        <AppContext.Provider value={{...contextState, setSearchCategory, setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };