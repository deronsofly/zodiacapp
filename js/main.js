// array of objects to store zodiac signs
var zodiac = [
	{
		sign: "aquarius",
		fortuneGood: "Friendly, Humanitarian, Creative, Independent, Loyal",
		fortuneBad: "Unpredictable, Inconsistent, Stubborn, Extremist",
		image: "img/aquarius.png",
	},
	{
		sign: "aries",
		fortuneGood: "Adventurous, Courageous, Versatile, Positive, Passonate, Lively",
		fortuneBad: "Arrogant, Stubborn, Impulsive, Indiscipline, Confrontational",
		image: "img/aries.png"
	},
	{
		sign: "cancer",
		fortuneGood: "Emotional, Spontaneous, Loving, Protective, Impulsive, Selective",
		fortuneBad: "Moody, Pessimistic, Clingy, Overemotional",
		image: "img/cancer.png"
	},
	{
		sign: "capricorn",
		fortuneGood: "Practical, Ambitious, Perservering, Diciplined, Patient, Cautious",
		fortuneBad: "Shy, Pessimistic, Stubborn",
		image: "img/capricorn.png"
	},
	{
		sign: "gemini",
		fortuneGood: "Witty and Humorous, Inquisitive, Intelligent, Changeable",
		fortuneBad: "Superficial, Anxious, Inconsistent ",
		image: "img/gemini.png"
	},
	{
		sign: "leo",
		fortuneGood: "Kind, Energetic, Strightforward, Faithful, Initiative",
		fortuneBad: "Headstrong, Egotistical, Impatient, Dominationg",
		image: "img/leo.png"
	},
	{
		sign: "libra",
		fortuneGood: "Balanced, Very fair, Romantic, Charming, Diplomatic",
		fortuneBad: "Indecisize, Detached, Superficial, Lazy",
		image: "img/libra.png"
	},
	{
		sign: "pisces",
		fortuneGood: "Kind, Compassionate, Imagination, Sensitive, Selfless",
		fortuneBad: "Over-sensitive, Idealistic, Escapist",
		image: "img/pisces.png"
	},
	{
		sign: "sagittarius",
		fortuneGood: "Large-hearted, Philosophical, Intellectual, Experimental, Optimistic",
		fortuneBad: "Careless, Tactless, Over confident, Inconsistent",
		image: "img/sagittarius.png"
	},
	{
		sign: "scorpio",
		fortuneGood: "Brave, Intuitive, Purposeful, Focused, Ambitious",
		fortuneBad: "Jealous, Secretive, Manipulative",
		image: "img/scorpio.png"
	},
	{
		sign: "taurus",
		fortuneGood: "	Generous, Down to earth, Patient, Presistent, Dependable",
		fortuneBad: "Self-indulgent, Lazy, Materialistic",
		image: "img/taurus.png"
	},
	{
		sign: "virgo",
		fortuneGood: "Watchful, Practical, Analytical, Trustworthy, Modest perfection",
		fortuneBad: "Overcritical, Fussy, Judgmental, Harsh",
		image: "img/virgo.png"
	}
];





function horoscope() {
	var userInput = document.getElementById("userinput");

	console.log(userInput);
	console.log("user value is: " + userinput.value);

	for(var i = 0; i < zodiac.length; i = i + 1){
		console.log("users value lowercase is: " + userinput.value.toLowerCase())
		console.log("current zodiac sign in loop is: " + zodiac[i].sign);

		if(userinput.value.toLowerCase() === zodiac[i].sign) {
			console.log("user typed in: " + userinput.value);
			console.log("current image for sign is: " + zodiac[i].image);
			console.log("current good fortune is: " + zodiac[i].fortuneGood);
			console.log("current bad fortune is: " + zodiac[i].fortuneBad);

			document.getElementById("yoursign").innerText = userinput.value;
			document.getElementById("signimage").src = zodiac[i].image;
			document.getElementById("good").innerText = "Your positive attributes are: " + zodiac[i].fortuneGood;
			document.getElementById("bad").innerText = "Your not so positive attributes are: " + zodiac[i].fortuneBad;
			
			return;
		};
		console.log("no matches were found, user failed to type in a correct zodiac sign");

		document.getElementById("yoursign").innerText = "Thats's not one of the 12 Zodiac Signs. Please try again!";
		document.getElementById("signimage").src = "img/swaggypmeme.jpg";
		document.getElementById("good").innerText = ""
			document.getElementById("bad").innerText = " "

	};
};