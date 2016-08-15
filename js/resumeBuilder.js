/*
This is empty on purpose! Your code to build the resume will go here.
 */

 




 
var work = {
	"jobs": [{
		"employer": "Westborn",
		"title": "Produce Advisor",
		"Dates": "1998-2001",
		"description": "Did stuff"
	}, {
		"employer": "HD",
		"title": "Head Cashier",
		"Dates": "2002-2006",
		"description": "Did stuff"
	}, {
		"employer": "At&T",
		"title": "EE",
		"Dates": "2006-Present",
		"description": "Did stuff"
	}]
}

var projects = {
	"Projects": [{
		"title": "Data Analysis",
		"description": "First Project Description"
	}, {
		"title": "FE Web Development",
		"description": "Second Project Description"
	}]
}


var bio = {
	"name" : "Michael Brockway",
	"role" : "Equipment Engineer",
	"contact info" : 
	[{
		"Phone" : "734-891-5555"},
		{
		"email" : "B@B.com"
	}],
	"welcome" : "Hello",
	"skills" : ["Awesome", "test", "test2"],
	"image" : "images/fry.jpg"
}

var education = {
	"schools": [{
		"name": "DC"
	}, {
		"name": "MSU"
	}],

	"Online Courses": [{
		"name": "Udacity"
	}]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var HTMLskills = HTMLskills.replace("%data%", bio.skills);

if (bio.skills != undefined)
{

	$("#header").append(HTMLskillsStart);
	$("#skills").append(HTMLskills);

};

for (jobs in work.jobs){

	$("#workExperience").append(HTMLworkStart);


	var Employer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
	var Title = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
	$(".work-entry:last").append(Employer.concat(Title));

	var Dates = HTMLworkDates.replace("%data%", work.jobs[jobs].Dates);
	$(".work-entry:last").append(Dates);

	var Description = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
	$(".work-entry:last").append(Description);
}