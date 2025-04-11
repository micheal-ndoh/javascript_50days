
const start = parseInt(prompt("Enter starting number for countdown:"));
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const count = async () => {
for (let i = start; i > 0; i--) {
    
   console.log(`Countdown: ${i}`);
  
   await sleep(1000);
}

console.log("Countdown complete!");
}

count ()