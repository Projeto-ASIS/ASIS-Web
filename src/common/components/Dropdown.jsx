import {
  createContext,
  useEffect,
  useRef,
  useState
} from "react"

const SelectedItemContext = createContext(null)
const SetSelectedItemContext = createContext(null)

function DropdownRoot({ items, placeholder, ...props }) {
  const dropdownRef = useRef()
  const [selectedItem, setSelectedItem] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    function handleOnClickOutside() {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOnClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleOnClickOutside)
    }
  }, [])

  function handleOnDropdownClick() {
    setIsDropdownOpen(state => !state)
  }

  return (
    <SelectedItemContext.Provider value={selectedItem}>
      <SelectedItemContext.Provider value={setSelectedItem}>
        <div className="dropdown" ref={dropdownRef}>
          <h3 className="dropdown__placeholder">Funcionários Disponíveis</h3>
          <div className="dropdown__container">
            <div
              className="dropdown__header"
              onClick={handleOnDropdownClick}
            >
              <span>{selectedItem ?? placeholder}</span>
              <button className="dropdown_button">▼</button>
            </div>
            <DropdownContentWrapper isOpen={isDropdownOpen}>
              {children}
            </DropdownContentWrapper>
          </div>
        </div>
      </SelectedItemContext.Provider>
    </SelectedItemContext.Provider>
  )
}

function DropdownPlaceholder({ children }) {
  return (
    <h3 className="dropdown__placeholder">{children}</h3>
  )
}

function DropdownContentWrapper() {
  if (!isOpen) return null

  return (
    <div className="dropdown_list">
      {children}
    </div>

  )
}
function DropdownItem({children}) {
  const setSelectedItem = useSetSelectedItem()

  function handleOnClick() {
    setSelectedItem()
  }

  return (
    <div
      key={staff.id}
      className="dropdown-item"
      onClick={handleOnClick}
    >
      <span className="staff-name">{children}</span>
    </div>

  )
}

function useSetSelectedItem() {
  return useContext(SetSelectedItemContext)
}