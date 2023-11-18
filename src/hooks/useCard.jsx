
export const useCard = () => {
    return {
        DateAndTimeModule: ({ dateString, timeString }) => {
            let datesArray, timeArray, getMinAndHrs
            let date, time = ''

            datesArray = dateString?.split(' ')
            getMinAndHrs = timeString.split(':')
            timeArray = timeString.split(' ')

            let currentDate = new Date()

            if (currentDate.toDateString() == dateString) {
                time = `${getMinAndHrs[0]}:${getMinAndHrs[1]} ${timeArray[1]}`
            } else if (currentDate.getDate() - 1 == datesArray[2]) {
                date = "yesterday"
                time = `${getMinAndHrs[0]}:${getMinAndHrs[1]} ${timeArray[1]}`
            } else if (currentDate.getFullYear() == datesArray[3]) {
                date = `${datesArray[1]} ${datesArray[2]}`
            } else {
                date = `${datesArray[1]} ${datesArray[2]} ${datesArray[3]}`
            }
            return (
                <>
                    <div className="date_time_section">
                        <span>Edited </span>
                        <span>{date}&nbsp;</span>
                        <span>{time}</span>
                    </div>
                </>
            )
        }
    }
}
