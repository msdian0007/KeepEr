import { useContext } from "react"
import { StoreContext } from "../../context/store"
import { MdDelete } from 'react-icons/md'
import { MdEdit } from 'react-icons/md'

export const TaskList = () => {
    const { notes, deleteNote, setTaskID, setIsFormOpen, setIsMasterCardOpen } = useContext(StoreContext)
    const handleEditForm = (e, id) => {
        setTaskID(id)
        setIsFormOpen(true)
    }

    const handleOpenMasterCard = (id) => {
        setIsMasterCardOpen(true)
        setTaskID(id)
    }

    let notesList
    if (notes?.length > 0) {
        notesList = (
            <div className='card_container'>
                {notes.map(({ note, title, dateString, timeString, id }) => {
                    return (
                        <div className='card' key={id} onClick={() => handleOpenMasterCard(id)}>
                            <span className="card_title">{title}</span>
                            <p className="card_note">{note}</p>
                            <div className="action_buttons">
                                <MdEdit className="edit_icon" onClick={(e) => handleEditForm(e, id)} />
                                <MdDelete className="delete_icon" onClick={() => deleteNote(id)} />
                            </div>
                            <div className="date_time_section">
                                <span>{dateString}&nbsp;</span>
                                <span>{timeString}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        notesList = (
            <h3 className="no_task_title">No tasks found!</h3>
        )
    }
    return (
        <>
            {/* <div className='card_container'> */}
            {notesList}
            {/* </div> */}
        </>
    )
}
