import { TaskList } from "../components/partials/TaskList"
import { Footer } from "../components/shared/Footer"
import { DefaultLayout } from "../layouts/DefaultLayout"

const headers = (
    <></>
)

const footers = (
    <Footer />
)

export const Home = () => {
    return (    
        <>
            <DefaultLayout {...{ headers, footers }}>
                <TaskList />
            </DefaultLayout>
        </>
    )
}
