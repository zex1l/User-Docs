export const convertDateFromBack = (date:string) => {
    if(date === '') return ''
    const newDate = new Date(date.slice(0, -1))

    const day = newDate.getDate()
    const month = newDate.getMonth()
    const years = newDate.getFullYear()

    return `${years}-${month < 10 ? '0' + month : month }-${day}`
}

export const convertDateToBack = (date:string) => {
    const newDate = new Date(date)

    return newDate.toISOString()
}