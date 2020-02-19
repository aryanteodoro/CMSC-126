function palindrome(){
	
	var str, lower, clean;

	str=document.getElementById("string").value;
  
    lower= str.toLocaleLowerCase();
    clean= lower.toLocaleLowerCase().replace(/[\W_]/g,'');
    
	var split = clean.split("");
	var reverse = split.reverse(); 
	var join = reverse.join("");
 
    if(clean.localeCompare(join)==0) 
      document.getElementById("display").innerHTML="Palindrome";
    else
      document.getElementById("display").innerHTML="Not a Palindrome";



}