function myStr(str){
  var string = str.split("")
  console.log(string)
  
  for(let i=0; i<string.length; i++)
  {
    let count = 0
    while(string[i] != 'a' || string[i] != 'b' ){
      count++
      
    break;
    }
    
    
}
myStr("aomebrb")

/*Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.*/