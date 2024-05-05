const service = require("./service")
const getInput = require("./getInput")

// menu
console.log("===== VGGATE Office =====")
console.log("Select option:")
console.log("1. Show all")
console.log("2. Insert an employee")
console.log("3. Edit an employee")
console.log("4. Delete an employee")
console.log("5. Delete all")

async function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
    yield 8;
    yield 9;
    yield 10;
}

(async function () {
    for await (const num of foo()) {
      const choose = await getInput("Enter a selection: ")
      if (choose === "1") {
        service.getEmployees()
      } else if (choose === "2") {
        await service.addEmployees()
      } else if (choose === "3") {
        await service.editAnEmployees()
      } else if (choose === "4") {
        await service.deleteAnEmployees()
      } else if (choose === "5") {
        await service.deleteAll()
      } else
        return false
    }
  })();