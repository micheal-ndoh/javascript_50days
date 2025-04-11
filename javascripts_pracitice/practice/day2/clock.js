setTimeout(1000)
console.log("First")
setTimeout(1000)
console.log("Second")
setTimeout(1000)
console.log("Third")

for (let i = 1; i <= 3; i++) {
  setTimeout(1000)
  console.log(`#${i}`)
}