// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
var work = {
    "jobs": [{
        "employer": "Westborn Market",
        "title": "Produce Advisor",
        "dates": "1998-2001",
        "description": "Did Stuff",
        "location": "Livonia, MI"
    }, {
        "employer": "Home Depot",
        "title": "Head Cashier",
        "dates": "2002-2006",
        "description": "Did Stuff",
        "location": "Okemos, MI"
    }, {
        "employer": "AT&T",
        "title": "EE",
        "dates": "2006-Present",
        "description": "Doing Stuff",
        "location": "Southfield, MI"
    }]
};
var bio = {
    "name": "Michael Brockway",
    "role": "Equipment Engineer",
    "contacts": {
        "mobile": "734-555-5555",
        "email": "email@gmail.com",
        "github": "https://github.com/mbrockway4",
        "twitter": "Brock",
        "location": "Dearborn, MI"
    },
    "welcomeMessage": "Welcome to my Online Resume",
    "skills": ["HTML", "JavaScript", "CSS"],
    "biopic": "images/fry.jpg",
    "location": "Farmington, MI"
};
var education = {
    "schools": [{
        "name": "Michigan State University",
        "dates": "2001 - 2005",
        "location": "East Lansing, MI",
        "degree": "Batchelor in Telecommunications",
        "majors": ["Telecommunications1","Telecommunications1a"],
        "url": "www.msu.edu"
    }, {
        "name": "Michigan State University2",
        "dates": "2001 - 2005",
        "location": "East Lansing, MI",
        "degree": "Batchelor in Telecommunications",
        "majors": ["Telecommunications2","Telecommunications2a"],
        "url": "www.msu.edu"
    }],
    "onlineCourses": [{
        "school": "Michigan State University",
        "title": "Online Class 1",
        "dates": "2015 - 2016",
        "url": "www.udacity.com"
    }, {
        "school": "Michigan State University",
        "title": "Online Class 2",
        "dates": "2015 - 2016",
        "url": "www.udacity.com"
    }]
};
var projects = {
    "projects": [{
        "title": "Data Analysis",
        "dates": "July 2015 - August 2015",
        "description": "First Project Description",
        "images": ["images/project1.jpg", "images/project1.jpg"]
    }, {
        "title": "FE Web Development",
        "dates": "July 2016 - August 2016",
        "description": "Second Project Description",
        "images": ["images/project2.jpg", "images/project2.jpg"]
    }]
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedContact = [];
    formattedContact.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContact.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContact.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContact.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContact.push(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").prepend(formattedName,formattedRole);
    if (bio.contacts !== undefined) {
        formattedContact.forEach(function(val, i) {
            $("#topContacts").append(formattedContact[i]);
            $("#footerContacts").append(formattedContact[i]);
        });
    }
    $("#header").append(formattedWelcome);
    $("#header").append(formattedImage);
    if (bio.skills !== undefined) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(val, i) {
            //debugger;
            var formattedSkills = HTMLskills.replace('%data%', val);
            $("#skills").append(formattedSkills);
        });
    }
};
education.display = function() {

    $('#education').append(HTMLschoolStart);
    education.schools.forEach(function(val) {
        var formattedName = HTMLschoolName.replace('%data%', val.name).replace('#', val.url);
        var formattedLocation = HTMLschoolLocation.replace('%data%', val.location);
        var formattedDegree = HTMLschoolDegree.replace('%data%', val.degree);
        var formattedMajors = HTMLschoolMajor.replace('%data%', val.majors);
        var formattedDates = HTMLschoolDates.replace('%data%', val.dates);
        var formattedNameDegree = formattedName + formattedDegree;
        $('.education-entry:last').append(formattedNameDegree);
        $('.education-entry:last').append(formattedDates);
        $('.education-entry:last').append(formattedLocation);
        $('.education-entry:last').append(formattedMajors);
        
    });
    $('.education-entry:last').append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(val) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", val.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", val.school);
        var formattedOnlinedates = HTMLonlineDates.replace("%data%", val.dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", val.url).replace("#", val.url);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlinedates);
        $(".education-entry:last").append(formattedOnlineURL);
    });
};
work.display = function() {
    work.jobs.forEach(function(val) {
        $("#workExperience").append(HTMLworkStart);
        var Employer = HTMLworkEmployer.replace("%data%", val.employer);
        var Title = HTMLworkTitle.replace("%data%", val.title);
        $(".work-entry:last").append(Employer.concat(Title));
        var dates = HTMLworkDates.replace("%data%", val.dates);
        $(".work-entry:last").append(dates);
        var worklocation = HTMLworkLocation.replace("%data%", val.location);
        $(".work-entry:last").append(worklocation);
        var Description = HTMLworkDescription.replace("%data%", val.description);
        $(".work-entry:last").append(Description);
    });
};
projects.display = function() {
    projects.projects.forEach(function(val) {
        var Title = HTMLprojectTitle.replace("%data%", val.title);
        var Description = HTMLprojectDescription.replace("%data%", val.description);
        var formatteddates = HTMLprojectDates.replace("%data%", val.dates);
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(Title);
        $(".project-entry:last").append(formatteddates);
        $(".project-entry:last").append(Description);
        val.images.forEach(function(val2) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", val2);
            $(".project-entry:last").append(formattedProjectImage);
        });
    });
};
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);