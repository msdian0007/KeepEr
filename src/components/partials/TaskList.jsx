import { useContext } from "react"
import { StoreContext } from "../../context/store"
import { MdDelete } from 'react-icons/md'
import { MdEdit } from 'react-icons/md'
import { FaEye } from "react-icons/fa";
import { MasterForm } from "../shared/MasterForm";
import { MasterCard } from "../shared/MasterCard";
import { BiCalendarMinus } from "react-icons/bi";
import { BiCalendarX } from "react-icons/bi";
import { useCard } from "../../hooks/useCard";

export const TaskList = () => {
    const { notes, deleteNote, setTaskID, setIsFormOpen, setIsMasterCardOpen, isFormOpen, isMasterCardOpen, setCompleted, setInCompleted } = useContext(StoreContext)
    const { DateAndTimeModule } = useCard()

    const handleEditForm = (e, id) => {
        setTaskID(id)
        setIsFormOpen(true)
    }

    const handleOpenMasterCard = (id) => {
        setTaskID(id)
        setIsMasterCardOpen(true)
    }

    let notesList
    if (notes?.length > 0) {
        notesList = (
            <div className='card_container'>
                {notes.map(({ note, title, dateString, timeString, isCompleted, id }) => {
                    return (
                        <div className={`${isCompleted ? 'task_completed_card' : 'card'}`} key={id} >
                            <h4 className="card_title">{title}</h4>
                            <p className="card_note">{note}</p>

                            {/* Date and Time Bar */}
                            <DateAndTimeModule {...{ dateString, timeString }} />

                            {/* Action Enviroment  */}
                            <div className="view_button">
                                <FaEye title="View Task" className="eye_icon" onClick={() => handleOpenMasterCard(id)} />

                                {/* Task Complete and Incomplete Button */}
                                <div className="complete_task_button">
                                    {isCompleted ? <BiCalendarX title="Incomplete Task" className="check_icon" onClick={() => setInCompleted(id)} />
                                        : <BiCalendarMinus title="Complete Task" className="check_icon" onClick={() => setCompleted(id)} />}
                                </div>

                                {/* Edit and Delete Buttons */}
                                <div className="action_buttons">
                                    {!isCompleted && <MdEdit title="Edit Task" className="edit_icon" onClick={(e) => handleEditForm(e, id)} />}
                                    <MdDelete title="Delete Task" className="delete_icon" onClick={() => deleteNote(id)} />

                                </div>
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
            {notesList}
            {isFormOpen && <MasterForm />}
            {isMasterCardOpen && <MasterCard />}
        </>
    )
}
