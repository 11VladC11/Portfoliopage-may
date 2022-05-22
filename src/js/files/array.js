const storage = [
	//home
	{
		"name":"Vlad Cojocaru",
		"status":"Front-end developer",
		"img":"img/my_profile_img.jpg",
	},
	//about
	{
		"aboutMe":"I'm a 17-years-old-boy currently living in Chisinau, MD. Self-starting front-end/web developer with 1.3 years worth of experience creating websites with SCSS, JS, Gulp and 2 months with React. I am a creative and fast-learner person who's passionate about making the best possible experience for people.",
		"skills":["CSS3","SCSS","JavaScript","jQuery","React","Gulp","node.js","GitHub","Photoshop","English(B1)","Russian(B2)","French(A2)","Romanian(B2)"],
		"aboutImg":"img/my_img.jpg",
		"education":[
			{
				"date":"04.2022 - present",
				"univType":"Udemy Course",
				"univ":"'Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)' by ZTM Academy",
				"description":""
			},
			{
				"date":"12.2021 - 02.2022",
				"univType":"Book",
				"univ":"'Eloquent JavaScript: A Modern Introduction to Programming' by Marjin Haverbeke",
				"description":""
			},
			{
				"date":"09.2021 - 11.2021",
				"univType":"Book",
				"univ":"'JavaScript and jQuery: Interactive Front-End Web Development' by Jon Duckett",
				"description":""
			},
			{
				"date":"06.2021 - 08.2021",
				"univType":"Book",
				"univ":"'CSS in Depth' by Keith J.Grant",
				"description":""
			},
			{
				"date":"03.2021 - 05.2021",
				"univType":"Book",
				"univ":"'HTML & CSS: Design and Build Web Sites' by Jon Duckett",
				"description":""
			},
		],
		"experience":[
			{
				"date":"03.2022 - 04.2022",
				"function":"Front-end",
				"place":"Task Manager",
				"description":"Task Manager is a web-application with many functionalities that helps people to manage their day.",
			},
			{
				"date":"02.2022",
				"function":"Front-end",
				"place":"CheckMark",
				"description":"CheckMark is an application that reads the maximum score and the personal score that we enter and calculates the grade that we have.",
			},
			{
				"date":"01.2022",
				"function":"Front-end",
				"place":"Decowallity",
				"description":"Decowallity is my first complex project that represents an electronic store, meant to sell my own products.",
			},
			{
				"date":"03.2021 - 12.2021",
				"function":"Front-end",
				"place":"Small projects",
				"description":"The 2021 was a very busy year and I only dealt with strengthening my front-end knowledge through building small projects",
			},
		],
	},
	//portfolio
	{
		"portfolio":[
			{
				"img":"img/taskmanager.jpg",
				"title":"Task Manager",
				"description":"Task Manager is a web-application with many functionalities that helps people to manage their day. I made this project to help people to keep track of their tasks and also to increase productivity, to provide motivation, to reduces stress and to provide a sense of accomplishment.",
				"created":"03.2022 - 04.2022",
				"techUsed":"SCSS, Gulp, JavaScript, API",
				"role":"Front-end",
				"onlineLink":"https://hustleapp.netlify.app/",
				"gitHublLink":"https://github.com/11VladC11/TaskManager-witth-local-storage"
			},
			{
				"img":"img/checkmark.jpg",
				"title":"Check Mark",
				"description":"CheckMark is an application that reads the maximum score, the personal score that we enter and calculates the grade that you have. I made this project to make my life a little easier by calculating my grade in a few seconds and seeing the whole scale on demand.",
				"created":"02.2022",
				"techUsed":"SCSS, Gulp, JavaScript",
				"role":"Front-end",
				"onlineLink":"https://checkmark.netlify.app/",
				"gitHublLink":""
			},
			{
				"img":"img/decowallity.jpg",
				"title":"Decowallity",
				"description":"Decowallity is my first complex project that represents an electronic store, meant to sell my own products. I made this project to sell and present in a website a new art created by me, which represents decorative plastic pieces in tattoo style that can be fixed on the wall, in few words tattoo-wall.",
				"created":"01.2022",
				"techUsed":"SCSS, Gulp, JavaScript, jQuery, jQuery UI",
				"role":"Front-end",
				"onlineLink":"https://decowallity.netlify.app/index.html",
				"gitHublLink":""
			},
		],
	},
		//contact
	{
		"email":"cojocaru.vlad.vladimir@gmail.com",
		"phone":"",
		"facebook":"https://www.facebook.com/vlad.cojocaru.716",
		"twitter":"https://twitter.com/VladCoj48390006",
		"instagram":"https://www.instagram.com/vladc_ay/",
		"linkedIn":"https://www.linkedin.com/in/vladcojocaru11/",
		"gitHub":"https://github.com/11VladC11",
	},
]
// home -------------------------
document.querySelector(".home-name").innerHTML = storage[0].name;
document.querySelector(".home-status").innerHTML = storage[0].status;
document.querySelector(".home-img-box").innerHTML = `<img src=${storage[0].img}>`;
document.querySelector(".about-img-box").innerHTML = `<img src=${storage[1].aboutImg}>`;
document.querySelector(".aboutMe").innerHTML = storage[1].aboutMe;
// about -----------------
function eachSkill(e){
	document.querySelector(".skills").innerHTML += `<div class="skill-item">${e}</div>`;
}
storage[1].skills.forEach(e => eachSkill(e));



function eachEducation(e){
	document.querySelector("#education .timeline").innerHTML += `
	<div class="timeline-item">
		<span class="date">${e.date}</span>
		<h4>${e.univType} - <span>${e.univ}</span></h4>
		<p>${e.description}</p>
	</div>
	`;
}
storage[1].education.forEach(e => eachEducation(e));



function eachExperience(e){
	document.querySelector("#experience .timeline").innerHTML += `
	<div class="timeline-item">
		<span class="date">${e.date}</span>
		<h4>${e.function} - <span>${e.place}</span></h4>
		<p>${e.description}</p>
	</div>
	`;
}
storage[1].experience.forEach(e => eachExperience(e));


// portfolio-----------------------
function eachWork(e){
	document.querySelector(".portfolio-section .row").innerHTML += `
	<div class="porfolio-item">
		<div class="portfolio-item-thumbnail">
			<img src=${e.img} alt="">
		</div>
		<h3 class="portfolio-item-title">${e.title}</h3>
		<button type="button" class="butn view-project-btn">View project</button>
		<div class="portfolio-item-details">
			<div class="description">
				<p>${e.description}</p>
			</div>
			<div class="general-info">
				<ul>
					<li>Created - <span>${e.created}</span></li>
					<li>technologies used - <span>${e.techUsed}</span></li>
					<li>Role - <span>${e.role}</span></li>
					<li>View Online - <span><a href="${e.onlineLink}" target="_blank">${e.onlineLink}</a></span></li>
					<li>View Source Code - <span><a href="${e.gitHublLink}" target="_blank">${e.gitHublLink}</a></span></li>
				</ul>
			</div>
		</div>
	</div>
	`;
}
storage[2].portfolio.forEach(e => eachWork(e));

//contact --------------
document.querySelector(".contact-email").innerHTML= storage[3].email;
// document.querySelector(".contact-phone").innerHTML= storage[3].phone;
document.querySelector(".contact-facebook").setAttribute('href', `${storage[3].facebook}`);
document.querySelector(".contact-twitter").setAttribute('href', `${storage[3].twitter}`);
document.querySelector(".contact-instagram").setAttribute('href', `${storage[3].instagram}`);
document.querySelector(".contact-linkedIn").setAttribute('href', `${storage[3].linkedIn}`);
document.querySelector(".contact-gitHub").setAttribute('href', `${storage[3].gitHub}`);
