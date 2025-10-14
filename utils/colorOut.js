
function printRed(msg) {
  console.log('\x1B[31m%s\x1B[0m', msg)
}

function printGreen(msg) {
  console.log('\x1B[32m%s\x1B[0m', msg)
}

function printYellow(msg) {
  console.log('\x1B[33m%s\x1B[0m', msg)
}

function printBlue(msg) {
  console.log('\x1B[34m%s\x1B[0m', msg)
}

function printMagenta(msg) {
  console.log('\x1B[35m%s\x1B[0m', msg)
}

function printGrey(msg) {
  console.log('\x1B[2m%s\x1B[0m', msg)
}

export {
  printGreen, printBlue, printRed, printYellow, printMagenta, printGrey
}
