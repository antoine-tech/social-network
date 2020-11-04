export const parseDate = (string) => {
    let date = new Date(string);

    let year = date.getFullYear();

    let month = date.getMonth()

    let day = date.getDate();

    return `${day} ${getMonthName(month)} ${year}`;

}

const getMonthName = (monthNumber) => {
    monthNumber = parseInt(monthNumber)
    switch (monthNumber) {
        case 1:

            return "Jan"
        case 2:

            return "Feb"
        case 3:

            return "Mar"
        case 4:

            return "May";
        case 5:

            return "Apr";

        case 6:

            return "Jun";

        case 7:
            return "Jul";

        case 8:

            return "Aug";
        case 9:

            return "Sep";
        case 10:

            return "Oct";
        case 11:

            return "Nov";
        case 12:

            return "Dec";
        default:
           return "";
    }
}