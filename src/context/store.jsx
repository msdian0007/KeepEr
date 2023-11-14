/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";


export const StoreContext = createContext({
    isFormOpen: false,
    setIsFormOpen: () => { },
    isMasterCardOpen: false,
    setIsMasterCardOpen: () => { },
    taskId: null,
    setTaskID: () => { },
    notes: [],
    addNotes: () => { },
    deleteNote: () => { }
})

export const StoreContextProvider = ({ children }) => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [isMasterCardOpen, setIsMasterCardOpen] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [taskId, setTaskID] = useState(null)
    const [notes, setNotes] = useState([])

    let notesString = localStorage.getItem('notes')
    let notesArray = JSON.parse(notesString)
    const addNotes = (note) => {
        let count = 0
        notesArray = notesArray?.map((n) => n.id == note.id ? (++count, note) : n)
        count <= 0 && notesArray.push(note)
        localStorage.setItem('notes', JSON.stringify(notesArray))
        setIsLoaded(!isLoaded)
    }

    const deleteNote = (id) => {
        notesArray = notesArray.filter((note) => note?.id !== id)
        localStorage.setItem('notes', JSON.stringify(notesArray))
        notesArray?.length <= 1 && setNotes([])
        setIsLoaded(!isLoaded)
    }

    useEffect(() => {
        if (notesArray?.length > 0) {
            setNotes(notesArray)
        } else {
            localStorage.setItem('notes', JSON.stringify([]))
        }
    }, [isFormOpen, isLoaded])

    let props = {
        isFormOpen,
        setIsFormOpen,
        notes,
        addNotes,
        deleteNote,
        taskId,
        setTaskID,
        isMasterCardOpen,
        setIsMasterCardOpen
    }

    return (
        <StoreContext.Provider value={{ ...props }}>
            {children}
        </StoreContext.Provider>
    )
}