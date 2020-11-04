export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getFirstLetter = (string = null) => {
    string = string ? string.charAt(1).toUpperCase() : null

    return string;
}