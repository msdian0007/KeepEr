import { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { StoreContext } from '../../context/store'

export const MasterCard = () => {
    const { setIsMasterCardOpen, taskId, notes, setTaskID } = useContext(StoreContext)
    
    const handleCloseMasterCard = () => {
        setTaskID(null)
        setIsMasterCardOpen(false)
    }
    
    let cardView
    if (taskId) {
        cardView = (
            notes.map(({ id, note, title }) => id === taskId &&
                <>
                    <div className="master_card" key={taskId}>
                        <h3 className="title">{title}</h3>
                        <p className="note">{note}</p>
                        <AiOutlineClose className='close_button' onClick={handleCloseMasterCard} />
                    </div>
                </>
            )
        )
    }
   
    return (
        <>
            <div className="master_card_container">
                {cardView}
            </div>
        </>
    )
}
