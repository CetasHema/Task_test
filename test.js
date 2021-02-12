
// page selection
function show(shown, hidden) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    return false;
}

function Result(){

    var ans2 = "I took a break from my career, and now I'm ready to get back into the workforce";
    var ans3 = "I want to do work that I actually care about even something that positively contributes to the world.";
    var ans4 = '7';
    var ans5 = 'A people person';
    var ans6 = "It's too late in my career/life to make this big of a change.";
    var ans7 = "A collaborative environment where I'm LEADING the team.";
    var ans8 = "Finally having a career that helps me do everything I love";
    var ans9 = " Within 3-6 months.";
   
    var name = document.getElementById("name").value;
    console.log(name);
    var career = document.querySelector('input[name = career]:checked').value;
    console.log(career);
    var about = document.querySelector('input[name = about]:checked').value;
    console.log(about);
    var e = document.getElementById("select");
    var slct = e.options[e.selectedIndex].text;
    console.log(slct);
    var question5 = document.querySelector('input[name = friend]:checked').value;
    console.log(question5);
    var question6 = document.querySelector('input[name = skills]:checked').value;
    console.log(question6);
    var question7 = document.querySelector('input[name = workplace]:checked').value;
    console.log(question7);
    var question8 = document.querySelector('input[name = tech]:checked').value;
    console.log(question8);
    var question9 = document.querySelector('input[name = job]:checked').value;
    console.log(question9);
    var question10 = document.getElementById("q10").value;
    console.log(question10);
    var mark = 2;
    if(ans2 == question2){
        mark++;
    }
    if(ans3 == question3){
        mark++;
    }
    if(ans4 == question4){
        mark++;
    }
    if(ans5 == question5){
        mark++;
    }
    if(ans6 == question6){
        mark++;
    }
    if(ans7 == question7){
        mark++;
    }
    if(ans8 == question8){
        mark++;
    }
    if(ans9 == question9){
        mark++;
    }
    console.log(mark);
    
}