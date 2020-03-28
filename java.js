function btn001(){
	var text001;
	var country001 = input001.value;

	if(country001== "India"){
		text001="The cost estimate is around 50,000/- Rupees";
		document.getElementById("message001").innerHTML=text001;
	}
	
	else if(country001== "America"){
		text001="The cost estimate is around 6,000 dollars";
		document.getElementById("message001").innerHTML=text001;
	}
	else if(country001== "China"){
		text001="The cost estimate is around 15,000 yuan";
		document.getElementById("message001").innerHTML=text001;
	}
	else if(country001== "Canada"){
		text001="The cost estimate is around 10,000 Canadian dollars";
		document.getElementById("message001").innerHTML=text001;
	}
	else if(country001== "France"){
		text001="The cost estimate is around 5,000 euro";
		document.getElementById("message001").innerHTML=text001;
	}
	else if(country001== "Germany"){
		text001="The cost estimate is around 7,000 euro";
		document.getElementById("message001").innerHTML=text001;
	}


	else{
		text001="Sorry,our services will be available soon in this country";
		document.getElementById("message001").innerHTML=text001;
	}
}
function end()
{
	alert("Your request has been submitted. Our employees will visit within few working days");
}