import { useCallback, useState } from "react"

export default function useExpandedSections(initialSections = {}){
  const [expandedSections, setExpandedSections] = useState(initialSections)

  const toggleSection = useCallback((section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  }, [expandedSections])

  return [expandedSections, toggleSection]
}