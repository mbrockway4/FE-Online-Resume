/*
This is empty on purpose! Your code to build the resume will go here.
 */




var work = {
	"jobs": [{
		"employer": "Westborn",
		"title": "Produce Advisor",
		"Dates": "1998-2001",
		"description": "Did stuff",
		"location" : "Livonia, MI"
	}, {
		"employer": "HD",
		"title": "Head Cashier",
		"Dates": "2002-2006",
		"description": "Did stuff",
		"location" : "Okemos, MI"
	}, {
		"employer": "At&T",
		"title": "EE",
		"Dates": "2006-Present",
		"description": "Did stuff",
		"location" : "Southfield, MI"
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
	"contacts" : 
	[{
		"Phone" : "734-891-5555"},
		{
		"email" : "B@B.com"},
		{
		"location" : "Canton, MI"
		}

	],
	"welcome" : "Hello",
	"skills" : ["Awesome", "test", "test2"],
	"image" : "images/fry.jpg",
	"location" : "Farmington, MI"
	
}

var education = {
	"schools": [{
		"name": "DC",
		"location" : "Southfield, MI"
	}, {
		"name": "MSU",
		"location" : "East Lansing, MI"
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

$("#main").append(internationalizeButton);


work.display = function()
{

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

};

projects.display = function()
{

	for (Projects in projects.Projects){

		$("#projects").append(HTMLprojectStart);

		
		var Title = HTMLprojectTitle.replace("%data%", projects.Projects[Projects].title);
		$(".project-entry:last").append(Title);

		var Description = HTMLprojectDescription.replace("%data%", projects.Projects[Projects].description);
		$(".project-entry:last").append(Description);
	}

};

function inName(name)
{
	name = name.trim().split(" ");
	console.log(name)
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
	}

work.display();
projects.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
  logClicks(x,y)
});

