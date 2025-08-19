const prompt = require("prompt-sync")()
const name =  prompt("hey what's your name? ")
console.log("hello",name,"how are you")

const shouldWePlay = prompt('Do you want to play? ')

if(shouldWePlay.toLowerCase() === 'yes'){
   console.log("Ok we can play!")
  //Game logic
  const leftOrRight = prompt("you entered amaze,do you want to go left or right?")
  if(leftOrRight === "left"){
    console.log("you go left and see a bridge..")
    const cross = prompt("Do you want to cross the bridge?").toLowerCase()
    if(cross === "yes"){
      console.log("you cross but the bridge was weak and broke and you fell. you lost..") 
    }else{
      console.log("Good choice... You win")
    }

  }else if(leftOrRight === "straight"){
    console.log("you go right and fall off a cliff")
  }



 
}


else if(shouldWePlay.toLowerCase() === 'no'){
  console.log("it's okay :(")
}else{
  console.log("Invalid input..")
}
