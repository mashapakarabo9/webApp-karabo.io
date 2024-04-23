function personalDetails() {

    const personalInfo = {
        fName : "karabo",
        surname: "Mohwane",
        id: 9804305533081,
        DOB: "1998/04/30",
        gender: "Male",
        license: "C1",
        address: "Boksburg",
        phone : "0735373288",
        email :"mashapakarabo9@gmial.com"
    };
    
    // Rendering personal details to the html page.
    document.getElementById("fName").innerHTML ="First Name : "+ personalInfo.fName;
    document.getElementById("lName").innerHTML ="Firmily Name : "+ personalInfo.surname;
    document.getElementById("idNo").innerHTML = "Identity No : "+ personalInfo.id;
    document.getElementById("gender").innerHTML ="Gender : "+ personalInfo.gender;
    document.getElementById("location").innerHTML ="location : "+ personalInfo.address;
    document.getElementById("contacts").innerHTML ="contacts : "+ personalInfo.phone;
    document.getElementById("email").innerHTML ="Email   : "+ personalInfo.email;
    document.getElementById("dob").innerHTML ="Date Of Birth : "+ personalInfo.DOB;
    document.getElementById("driverLicence").innerHTML = "Driver's License :" + personalInfo.license;
    
    
    
    
    }
    
    // Method for rendering education backgroung to the DOM
    
    
    function education()
    {
        //Array of Qualifiction objects
        const qualArray =[
            {
    
            qualification: "National Senior Certificate",
            qualStatus: "Completed",
            institution: "Rama Secondary School"
        },
    
        {
            qualification : "National Diploma in Information Technology",
            qualStatus : "Completed",
            institution : "Tshwane University of Technology"
        },
    
        {
            qualification : "Microsoft 365 Fundalmentals",
            qualStatus : "Completed",
            institution : "Microsoft"
        },
    
        {   qualification : "Web Development",
            qualStatus : "In-Progress",
            institution : "CodeTribe Academy"
        }
    ]
               //Rendering First Qualification
            document.getElementById("institution1").innerHTML=qualArray[0].qualification;
            document.getElementById("qual1").innerHTML=qualArray[0].institution;
            document.getElementById("status1").innerHTML=qualArray[0].qualStatus;
    
              //Rendering Second Qualification
            document.getElementById("institution2").innerHTML=qualArray[1].qualification;
            document.getElementById("qual2").innerHTML=qualArray[1].institution;
            document.getElementById("status2").innerHTML=qualArray[1].qualStatus;
    
               //Rendering Third Qualification
            document.getElementById("institution3").innerHTML=qualArray[2].qualification;
            document.getElementById("qual3").innerHTML=qualArray[2].institution;
            document.getElementById("status3").innerHTML=qualArray[2].qualStatus;
                
            //Rendering Fourth Qualification
            document.getElementById("institution4").innerHTML=qualArray[3].qualification;
            document.getElementById("qual4").innerHTML=qualArray[3].institution;
            document.getElementById("status4").innerHTML=qualArray[3].qualStatus;
    
    
    }
    education();
    personalDetails();
    function WorkingExperience() {
    
    }
    
    