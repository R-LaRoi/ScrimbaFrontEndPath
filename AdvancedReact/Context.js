import React from "react";
import Header from "./Header";
import Button from "./Button";

const NewContext = React.createContext()

export default function App() {
  return (

    <NewContext.Provider value='dark'>
    <div className="container dark-theme">
      <Header />
      <Button />
    </div>
    </NewContext.Provider>
  );
}





// ----------- Header File ----------------

import {NewContext} from "./app"

export default function Header() {

  const contextValue = React.useContext(NewContext)
    return (
       <header className={`${contextValue}-theme`}>
            <h1>{contextValue} Theme</h1>
        </header>
    )
}

// ------------Button File--------------------

import React from "react"
import {ThemeContext} from "./App"

export default function Button() {
    const contextValue = React.useContext(ThemeContext)
    return (
        <button className={`${contextValue}-theme`}>
            Switch Theme
        </button>
    )
}



// ------------------------------------------------------
// toggle component 

    /**
     * Challenge: set up context!
     * Reminder of the steps:
     * 1. Create a new context (outside the component, but in this file)
     * 2. Export that context instance from the file so we 
     *    can use it eleswhere
     * 3. Use the Context Provider to wrap the `children` returned
     *    from this Toggle component
     * 4. Pass the state values to the context value prop for access
     *    from child components later on
     */

    // ---- creating context --------->

import React from "react"

const CreateToggleContext = React.createContext()

export default function Toggle({ children }) {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
  <createToggle.Provider value={{on, toggle}}>
      {children}
      </createToggle.Provider>
    )
}

export {CreateToggleContext}


// --- creating toggle button --->


export default function ToggleButton(){


  return(

<div> </div>

  )

}