import React from "react";

import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";


// -----parent -----
function App() {

  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
  <Menu>
    <MenuButton>sports</MenuButton>
      <MenuDropdown>
         {sports.map(sport => (
          <MenuItem>{sport}</MenuItem>
        ))}
      </MenuDropdown>
      </Menu>

  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);




// ===========================

const OpenButton = React.createContext()

export default function Menu({children}) {
  
  const [open, setOpen] = React.useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
<OpenButton.Provider value={false}>
    <div className="menu">
     {children}
    </div> 
    </OpenButton.Provider>
  );
}



// -----------file----------------
export default function MenuButton({children, onClick }) {
    return (
        <Button onClick={onClick}>{children}</Button>
    )
}

// -----------------file--

import {OpenButton} from"./menu"



export default function MenuDropdown({ items }) {
  const showButton = React.useContext(OpenButton)
    return showButton ?  (
        <div className="menu-dropdown">
            {items.map(
                item => (
                    <div
                        className="menu-item"
                        key={item}
                    >
                        {item}
                    </div>
                )
            )}
        </div>
    ) : null
}

// -------------file --------------
import React from "react"

export default function MenuItem({children}) {
    return (
        <p>{children}</p>
    )
}

// /-----------------


// 1. How would you explain the concept of compound components in React to someone who
//    only knows the very basics of React?

// -- contains multiple components that are structured to work together for one objective maybe for reusability and easier to read



// 2. What are some examples of HTML elements that work together to add functionality
//    or styling to each other?

// -- forms, <ul>&<li> , <table>



// 3. How can compound components help you avoid having to drill props multiple levels
//    down?

// - with children components nested into parent component the compound component hierarchy is flattened so props are easily accessible from the parent to child