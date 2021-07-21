//alert("hello")

const birthDateTb = document.querySelector("#birth_date");

const luckyNumberTb = document.querySelector("#lucky_number");

const checkBtn = document.querySelector("#check");

const error = document.querySelector(".error");

const imgDiv = document.querySelector("#content_image");

const msgP = document.querySelector("#message");

const img = document.querySelector("#con_image");

checkBtn.addEventListener("click",()=>{
	//console.log("Birth date is " +birthDateTb.value + " lucky number is " + luckyNumberTb.value);
	hiderror();
	hideOutputDiv();
	let birthDate = birthDateTb.value;
	let luckyNum = luckyNumberTb.value;
	// console.log(typeof(birthDate));
	// console.log(typeof(luckyNum));

	if(birthDate==="" || luckyNum==="" ){
		showerror("Please enter input correctly")
	} else{
		calculate(birthDate,luckyNum);
	}

});


function calculate(birthDate,luckyNum){
	
	let count = splitBirthDate(birthDate);
	imgDiv.style.display="block";
	if(count % Number(luckyNum)===0){
		//console.log("you are lucky");
		showOutput("you are lucky","./images/lucky.jpg");
	} else{
		//console.log("not that lucky");
		showOutput("not that lucky","./images/unlucky.jpg");
	}
	
}

function splitBirthDate(birthDate){
	let birthArr = birthDate.split("-");
	let birthCon = birthArr.reduce((num,acc)=>{
		return num = num+acc;	 
		
	});
	let birthArrModified = birthCon.split("");
	return birthArrModified.reduce((num,acc)=>{
		return num = Number(num)+Number(acc);
	});
}

function showOutput(text,imgSrc){
	msgP.innerText=text;
	img.src = imgSrc;
}

function hideOutputDiv(){
	imgDiv.style.display="none";
}



function showerror(text){
	error.style.display="block"
	error.innerText=text;
}

function hiderror(){
	error.style.display="none"
}
