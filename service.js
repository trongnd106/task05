const { getEmployeeID, checkIdExist } = require("./check")
const getInput = require("./getInput")

const info = ["name", "position", "day-in", "day-out"];

const employees = new Map()
employees.set("1",
    {
        id: 1,
        name: "Trong",
        position: "Dev1",
        dayIn: "2024-05-02",
        dayOut: "2124-05-02"
    }
)

getEmployeeID(employees)
checkIdExist(employees)

const getEmployees = () => {
  Array.from(employees.values()).forEach((item) => {
    console.log(
        `ID:${item.id} ---- Name:${item.name} ---- Position:${item.position} ---- Day In:${item.in_date} ---- Day Out:${item.out_date}`
      )
  })
}

const addEmployees = async() => {
  const id = await checkIdExist(employees)

  const name = await getInput("Enter name: ")
  const position = await getInput("Enter position: ")
  const dayIn = await getInput("Enter day in (YYYY-MM-DD): ")
  const dayOut = await getInput("Enter day out (YYYY-MM-DD): ")

  const newEmployee = {
    id,
    name,
    position,
    dayIn,
    dayOut,
  }

  employees.set(id, newEmployee)
  console.log("Create an employee successfully!")
}

const editAnEmployees = async () => {
  const idEmployee = await getEmployeeID(employees)
  const e = employees.get(idEmployee)
  // custom
  console.log("ID ----- name ----- position ----- day-in ----- day-out")
  console.log(`${e.id} ----${e.name} ----${e.position} ----${e.dayIn} ----${e.dayOut}`)

  const choose = await getInput("Select the field:")
  if (!info.includes(choose)) {
    console.log("There are no matching fields, try again!")
    return editEmployess()
  }
  if (choose === "name") {
    e.name = await getInput("Enter name: ")
  } 
  else if (choose === "position") {
    e.position = await getInput("Enter position: ")
  } 
  else if (choose === "dayIn") {
    e.dayIn = await getInput("Enter day in (YYYY-MM-DD): ")
  } 
  else if (choose === "dayOut") {
    e.dayOut = await getInput("Enter day out (YYYY-MM-DD): ")
  }
  employees.set(idEmployess, e)
}

const deleteAnEmployees = async() => {
  const id = await getEmployeeID(employees)
  const ans = await getInput("Are you sure you want to delete this person?")
  if (ans === "n") 
    return false
  
  employees.delete(id)
  console.log("Deleted employee successfully!")
}

const deleteAll = async() => {
    const ans = await getInput("[WARNING]Are you sure? You will lost all informations if press 'y'.")
    if(ans === "n")
        return false

    employees.clear()
    console.log("Deleted all successfully!")
}

module.exports = {
    getEmployees, addEmployees, editAnEmployees, deleteAnEmployees, deleteAll
}