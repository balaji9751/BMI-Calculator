function bmi(){
 
  let bala1 = prompt("Enter your Weight in kg :");
  let bala2 = prompt("Enter your height in cm :");
  
  
  let Weightr=parseFloat(bala1);
  let height=parseFloat(bala2);
   let height1=height/100;
  let calculate=(Weightr/height1**2);


 document.getElementById("result").innerHTML=
  `Your BMI is: ${calculate.toFixed(2)}`;
  if(calculate < 18.5){
    console.log("underweight");
    
 document.getElementById("result1").innerHTML=
  `Status = underweight`;
   
  }
 else if((calculate < 24.9) &(calculate > 18.5))
 {
  console.log("Normal");
   document.getElementById("result1").innerHTML=
  `Status = Normal`;
   
 

 }
 else{
  console.log("Overweight");
   document.getElementById("result1").innerHTML=
  `Status = Overweight`;
   
  
 }
 
 
}
