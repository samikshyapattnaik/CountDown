const endDate = "09 Jun 2024 10:00 PM"
document.getElementById("end_date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")

// const close = ( ) => {
    //}

   function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff =(end - now ) / 1000;
    if (diff <0) return;
    // convert into days
    inputs[0].value=Math.floor(diff / 3600  /24);
    //convert into hour
    inputs[1].value=Math.floor(diff /3600)%24;
    //convert into min
    inputs[2].value= Math.floor(diff / 60)%60;
    //convert into sec
    inputs[3].value=Math.floor(diff % 60 )
   }
   //initial call 
   clock()

   setInterval(
    () => {
        clock()
    },
    1000
)