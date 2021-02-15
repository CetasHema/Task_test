
// page selection

var v = 0;

function show(shown, hidden) {
    if (validate(v) || v == 0) {
        document.getElementById(shown).style.display = 'block';
        document.getElementById(hidden).style.display = 'none';
        v++;
    }
    
}

function validate(r)
{   
     if(r==1) {
        if(document.getElementById("name").value == "") {
                alert("Enter the name");
                return false;
                
            }
        else {
            
            return true;


        }
    }

    if(r==2) { 
        var career = document.getElementsByName('career'); 
        var cs=""; 
        for(i = 0; i < career.length; i++) { 
            if(career[i].checked){ 
                cs= career[i].value;
                return true;
            }
        }
        if(cs==""){
            alert("Select any one from the given option");
            return false;
        }
    }

    if(r==3) { 
        var about = document.getElementsByName('about'); 
        var abt=""; 
        for(i = 0; i < about.length; i++) { 
            if(about[i].checked){ 
                abt= about[i].value;
                return true;
            }
        }
        if(abt==""){
            alert("Select any one from the given option");
            return false;
        }
    }

    if(r==4) {
        var selc = document.getElementById("select");
        if(selc.options[selc.selectedIndex].text ==""){
            alert("Select any one from the option");
            return false;
        }
        else{
            return true;
        }
    }

    if(r==5) { 
        var friend = document.getElementsByName('friend'); 
        var frd=""; 
        for(i = 0; i < friend.length; i++) { 
            if(friend[i].checked){ 
                frd= friend[i].value;
                return true;
            }
        }
        if(frd==""){
            alert("Select any one from the given option");
            return false;
        }
    }
   
    if(r==6) { 
        var skills = document.getElementsByName('skills'); 
        var skl=""; 
        for(i = 0; i < skills.length; i++) { 
            if(skills[i].checked){ 
                skl= skills[i].value;
                return true;
            }
        }
        if(skl==""){
            alert("Select any one from the given option");
            return false;
        }
    }

    if(r==7) { 
        var workplace = document.getElementsByName('workplace'); 
        var wp=""; 
        for(i = 0; i < workplace.length; i++) { 
            if(workplace[i].checked){ 
                wp= workplace[i].value;
                return true;
            }
        }
        if(wp==""){
            alert("Select any one from the given option");
            return false;
        }
    }

    if(r==8) { 
        var tech = document.getElementsByName('tech'); 
        var tc=""; 
        for(i = 0; i < tech.length; i++) { 
            if(tech[i].checked){ 
                tc= tech[i].value;
                return true;
            }
        }
        if(tc==""){
            alert("Select any one from the given option");
            return false;
        }
    }

    if(r==9) { 
        var job = document.getElementsByName('job'); 
        var jb=""; 
        for(i = 0; i < job.length; i++) { 
            if(job[i].checked){ 
                jb= job[i].value;
                return true;
            }
        }
        if(jb==""){
            alert("Select any one from the given option");
            return false;
        }
    }

    if(r==10) {
        console.log(mail);
        if(document.getElementById("mail").value == "") {
                alert("Enter the mail-id");
                return false;
            }
        else 
        {
        if(validateEmail(document.getElementById("mail"))){
            val = 0;
            return true;

        }

        }
       
    }
}  


    function validateEmail(emailField) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(emailField.value) == false) {
            alert('Invalid Email Address');
            return false;
        }
        return true;
    }


function Result() {

    document.getElementById("page11").style.display = 'none';
    document.getElementById("page12").style.display = 'block';

    var ans1 = "I took a break from my career, and now I'm ready to get back into the workforce";
    var ans2 = "I’d like to be able to work from home — or anywhere but a cubicle!";
    var ans3 = '7';
    var ans4 = 'A people person';
    var ans5 = "It's too late in my career/life to make this big of a change.";
    var ans6 = "A collaborative environment where I'm LEADING the team.";
    var ans7 = "Finally having a career that helps me do everything I love";
    var ans8 = "Within 3-6 months.";

    var name = document.getElementById("name").value;
    console.log(name);

    var career = document.querySelector('input[name = career]:checked').value;
    console.log(career);

    var about = document.querySelector('input[name = about]:checked').value;
    console.log(about);

    var e = document.getElementById("select");
    var slct = e.options[e.selectedIndex].text;
    console.log(slct);

    var friend = document.querySelector('input[name = friend]:checked').value;
    console.log(friend);

    var skills = document.querySelector('input[name = skills]:checked').value;
    console.log(skills);

    var workplace = document.querySelector('input[name = workplace]:checked').value;
    console.log(workplace);

    var tech = document.querySelector('input[name = tech]:checked').value;
    console.log(tech);

    var job = document.querySelector('input[name = job]:checked').value;
    console.log(job);

    var mail = document.getElementById("mail").value;
    console.log(mail);
    var mark = 2;
    if (ans1 == career) {
        mark++;
        console.log("hema");
        console.log(mark);
    }
    if (ans2 == about) {
        mark++;
        console.log("he");
        console.log(mark);
    }
    if (ans3 == slct) {
        mark++;
        console.log("hem");
        console.log(mark);
    }
    if (ans4 == friend) {
        mark++;
        console.log("hema");
        console.log(mark);
    }
    if (ans5 == skills) {
        mark++;
        console.log("hemaa");
        console.log(mark);
    }
    if (ans6 == workplace) {
        mark++;
        console.log("hemaaa");
        console.log(mark);
    }
    if (ans7 == tech) {
        mark++;
        console.log("hemaaaaaa");
        console.log(mark);
    }
    if (ans8 == job) {
        mark++;
        console.log("hemaaaaaaaaaa");
        console.log(mark);
    }
    console.log(mark);


    document.getElementById("tr11").innerHTML = "Your Name"
    document.getElementById("tr21").innerHTML = ans1;
    document.getElementById("tr31").innerHTML = ans2;
    document.getElementById("tr41").innerHTML = ans3;
    document.getElementById("tr51").innerHTML = ans4;
    document.getElementById("tr61").innerHTML = ans5;
    document.getElementById("tr71").innerHTML = ans6;
    document.getElementById("tr81").innerHTML = ans7;
    document.getElementById("tr91").innerHTML = ans8;
    document.getElementById("tr101").innerHTML = "Your Mali-ID"


    document.getElementById("tr12").innerHTML = name;
    document.getElementById("tr22").innerHTML = career;
    document.getElementById("tr32").innerHTML = about;
    document.getElementById("tr42").innerHTML = slct;
    document.getElementById("tr52").innerHTML = friend;
    document.getElementById("tr62").innerHTML = skills;
    document.getElementById("tr72").innerHTML = workplace;
    document.getElementById("tr82").innerHTML = tech;
    document.getElementById("tr92").innerHTML = job;
    document.getElementById("tr102").innerHTML = mail;
    document.getElementById("res").innerHTML="Your score is:"+ mark +"/10";

        mark=mark*10;
    $('.progress-bar').css('width',+mark+'%').attr('aria-valuenow', mark);
}

function mark() { 
    var element = document.getElementById("myprogressBar");    
    var width = 1; 
    var identity = setInterval(scene, 10); 
    function scene() { 
      if (width >= 100) { 
        clearInterval(identity); 
      } else { 
        width++;  
        element.style.width = width + '%';  
      } 
    } 
}

// function emailvalid(emailField) {
//     var mail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     if (mail.test(emailField.value) == false) {
//         alert('Please enter valid Email-ID');
//         return false;
//     }
//     return true;
// }