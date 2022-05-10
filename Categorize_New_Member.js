

function openOrSenior(data){
    // Senior = >54 and >7
   // Open = <54 and <7
    let result = [];
    for (let i = 0; i < data.length; i++){
      let age = data[i][0];
      let handicap = data[i][1];
      if (age > 54 && handicap > 7){
          result.push("Senior");
      } else {
            result.push("Open");  
    }
    
  }
  return result;
}
        
   
  