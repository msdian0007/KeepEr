
export const DefaultLayout = ({ children, headers, footers }) => {
    return (
        <>
            {headers}
            {children}
            {footers}
        </>
    )
}
