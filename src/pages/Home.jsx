import { useContext } from "react"
import { TaskList } from "../components/partials/TaskList"
import { Footer } from "../components/shared/Footer"
import { MasterForm } from "../components/shared/MasterForm"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { StoreContext } from "../context/store"
import { MasterCard } from "../components/shared/MasterCard"

const headers = (
    <></>
)

const footers = (
    <Footer />
)

export const Home = () => {
    const { isFormOpen, isMasterCardOpen } = useContext(StoreContext)
    return (
        <>
            <DefaultLayout {...{ headers, footers }}>
                <TaskList />
                {isFormOpen && <MasterForm />}
                {isMasterCardOpen && <MasterCard />}
            </DefaultLayout>
        </>
    )
}
