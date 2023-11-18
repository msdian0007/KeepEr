import { useContext } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { StoreContext } from '../../context/store'

export const Footer = () => {
    const { setIsFormOpen } = useContext(StoreContext)
    return (
        <>
            <div className="footer_container">
                <IoMdAdd className="add_icon" onClick={() => setIsFormOpen(true)} />
                {/* <h5 className='author_line'>Made with 💛 by 🍁</h5> */}
            </div>
        </>
    )
}
