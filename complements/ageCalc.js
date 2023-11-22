const calculateAge = (date = "2022-02-02") => {
    const partesData = date.split("-");
    const dataAtual = new Date().toLocaleString().substr(0, 10)
    var dataFormat = dataAtual.split("/")

    return (dataFormat[2])-(partesData[0]) || 0
}


export default calculateAge