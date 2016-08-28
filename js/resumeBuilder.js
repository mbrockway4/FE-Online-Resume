
var work = {
    "jobs": [{
        "employer": "Westborn Market",
        "title": "Produce Advisor",
        "Dates": "1998-2001",
        "description": "Did Stuff",
        "location": "Livonia, MI"
    }, {
        "employer": "Home Depot",
        "title": "Head Cashier",
        "Dates": "2002-2006",
        "description": "Did Stuff",
        "location": "Okemos, MI"
    }, {
        "employer": "AT&T",
        "title": "EE",
        "Dates": "2006-Present",
        "description": "Doing Stuff",
        "location": "Southfield, MI"
    }]
}

var bio = {
    "name": "Michael Brockway",
    "role": "Equipment Engineer",
    "contacts": {
        "Mobile": "734-555-5555",
        "Email": "email@gmail.com",
        "Github": "https://github.com/mbrockway4",
        "Twitter": "Brock",
        "Location": "Dearborn, MI"
    },
    "welcome": "Welcome to my Online Resume",
    "skills": ["HTML", "JavaScript", "CSS"],
    "image": "images/fry.jpg",
    "location": "Farmington, MI"

}

var education = {
    "schools": [{
            "name": "Michigan State Univeristy",
            "dates": "2001 - 2005",
            "location": "East Lansing, MI",
            "degree": "Batchelor in Telecommunications",
            "majors": "Telecommunications",
            "url": "www.msu.edu"
        }, {
            "name": "Michigan State Univeristy2",
            "dates": "2001 - 2005",
            "location": "East Lansing, MI",
            "degree": "Batchelor in Telecommunications",
            "majors": "Telecommunications",
            "url": "www.msu.edu"
        }

    ],

    "onlineCourses": [{
        "school": "Michigan State Univeristy",
        "title": "Online Class 1",
        "dates": "2015 - 2016",
        "url": "www.udacity.com"
    }, {
        "school": "Michigan State Univeristy",
        "title": "Online Class 2",
        "dates": "2015 - 2016",
        "url": "www.udacity.com"
    }]
};

var projects = {
    "Projects": [{
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
}

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);


    var formattedImage = HTMLbioPic.replace("%data%", bio.image);
    var formattedLocation = HTMLlocation.replace("%data%", bio.location);

    var formattedContact = [];
    formattedContact.push(HTMLmobile.replace("%data%", bio.contacts.Mobile));
    formattedContact.push(HTMLemail.replace("%data%", bio.contacts.Email));
    formattedContact.push(HTMLgithub.replace("%data%", bio.contacts.Github));
    formattedContact.push(HTMLtwitter.replace("%data%", bio.contacts.Twitter));
    formattedContact.push(HTMLlocation.replace("%data%", bio.contacts.Location));

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    if (bio.contacts != undefined) {
        for (index in formattedContact) {

            $("#topContacts").append(formattedContact[index]);
            $("#footerContacts").append(formattedContact[index]);
        }
    };



    $("#header").append(formattedWelcome);
    $("#header").append(formattedImage);


    if (bio.skills != undefined) {
        $("#header").append(HTMLskillsStart);
        for (index in bio.skills) {
            //debugger;
            var formattedSkills = HTMLskills.replace('%data%', bio.skills[index]);
            $("#header").append(formattedSkills);
        }
    };
}



education.display = function() {
    for (index in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[index].majors);
        var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.schools[index].url)

        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
        $(".education-entry:last").append(formattedHTMLonlineURL);
    }
    $("#education").append(HTMLonlineClasses);

    for (index in education.onlineCourses) {

        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url).replace("#", education.onlineCourses[index].url);


        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);

    }
}

work.display = function() {

    for (jobs in work.jobs) {

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

projects.display = function() {

    for (index in projects.Projects) {

        var Title = HTMLprojectTitle.replace("%data%", projects.Projects[index].title);
        var Description = HTMLprojectDescription.replace("%data%", projects.Projects[index].description);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.Projects[index].dates)

        $("#projects").append(HTMLprojectStart);

        $(".project-entry:last").append(Title);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(Description);

        for (index2 in projects.Projects[index].images) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.Projects[index].images[index2]);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }

};


bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);


