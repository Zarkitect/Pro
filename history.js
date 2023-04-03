
var score=0;

function getresult(){
   

    
	if(document.getElementById('correct1').checked)
		{	score++;
			var shiko=document.getElementById("LL1");
shiko.style.backgroundColor="Green";
shiko.style.display="none";
		}
		else{
			var shiko=document.getElementById("LL1");
			shiko.classList.add("shake");
			
		}
	if(document.getElementById('correct2').checked)
		{	score++;
			
		}
		else {
			var shiko=document.getElementById("LL2");
			shiko.classList.add("shake");
		}
	if(document.getElementById('correct3').checked)
		{	score++;
		}
		else{
			var shiko=document.getElementById("LL3");
			shiko.classList.add("shake");

		}
	
        if(document.getElementById('correct4').checked){
            score++;
        } else {
			var shiko=document.getElementById("LL4");
			shiko.classList.add("shake");

		}
        if(document.getElementById('correct5').checked){
            score++;
        } else{
			var shiko=document.getElementById("LL5");
			shiko.classList.add("shake");

		}
		var kill=document.getElementById("You-Scored-Test");
		kill.textContent="You scored " + score +" Out of 5";
        


 // to print on browser
}