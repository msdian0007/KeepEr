import { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { StoreContext } from '../../context/store'
import { v4 as uuid } from 'uuid'


export const MasterForm = () => {
    const { setIsFormOpen, addNotes, taskId, notes, setTaskID } = useContext(StoreContext)
    const [formValues, setFormValues] = useState({
        id: uuid(),
        note: '',
        title: '',
    })

    const handleOnChange = (e) => {
        let { name, value } = e.target
        setFormValues((prevVal) => ({ ...prevVal, [name]: value }))
    }

    const getDateAndTime = () => {
        let date = new Date()
        let dateString = date.toLocaleDateString()
        let timeString = date.toLocaleTimeString()
        return { dateString, timeString }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addNotes({ ...formValues, ...getDateAndTime() })
        setTaskID(null)
        setIsFormOpen(false)
    }

    useEffect(() => {
        if (taskId) {
            let res = notes?.filter((note) => note.id === taskId)
            setFormValues(...res)
        }
    }, [taskId])

    return (
        <>
            <div className="form_container">
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        name='title'
                        type="text"
                        placeholder="Title"
                        value={formValues.title}
                        onChange={handleOnChange}
                        required
                        autoFocus
                    />
                    <textarea
                        name="note"
                        id=""
                        cols="30"
                        rows="5"
                        placeholder='note'
                        value={formValues.note}
                        onChange={handleOnChange}
                        required
                    />
                    <button className='close_button_square' onClick={() => setIsFormOpen(false)}>close</button>
                    <button className='add_button' type='submit'>Add</button>
                    <AiOutlineClose className='close_button' onClick={() => setIsFormOpen(false)} />
                </form>
            </div>
        </>
    )
}
