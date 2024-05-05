const getInput = require('./getInput') 

const getEmployeeID = async(employees) => {
    const employeeID = await getInput("Enter userID: ")
    if (!employees.has(employeeID)) {
      console.log("Emplyee not found!")
      return getEmployeeID(employees)
    }
    return employeeID
  }
  
const checkIdExist = async (employees) => {
    const employeeID = await getInput("Enter userID: ")
    if (employees.has(employeeID)) {
    console.log("ID existed, try again!")
    return checkIdExist(employees)
    }
    return employeeID
}

module.exports = {
    getEmployeeID, checkIdExist
}