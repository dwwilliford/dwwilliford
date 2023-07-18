document.getElementById("Meal_plan").addEventListener('click',myWindow)
function myWindow()
{
    visitorName = document.getElementById("user_name").value;
    visitorGoal = document.getElementById("goal").value;
   Monday_Breakfast = document.getElementById("Monday_Breakfast").value;
   Monday_MorningSnack = document.getElementById("Monday_MorningSnack").value;
   Monday_Lunch = document.getElementById("Monday_Lunch").value;
   Monday_AfternoonSnack = document.getElementById("Monday_AfternoonSnack").value;
   Monday_Dinner = document.getElementById("Monday_Dinner").value;

   Tuesday_Breakfast = document.getElementById("Tuesday_Breakfast").value;
   Tuesday_MorningSnack = document.getElementById("Tuesday_MorningSnack").value;
   Tuesday_Lunch = document.getElementById("Tuesday_Lunch").value;
   Tuesday_AfternoonSnack = document.getElementById("Tuesday_AfternoonSnack").value;
   Tuesday_Dinner = document.getElementById("Tuesday_Dinner").value;

   Tuesday_Breakfast = document.getElementById("Tuesday_Breakfast").value;
   Tuesday_MorningSnack = document.getElementById("Tuesday_MorningSnack").value;
   Tuesday_Lunch = document.getElementById("Tuesday_Lunch").value;
   Tuesday_AfternoonSnack = document.getElementById("Tuesday_AfternoonSnack").value;
   Tuesday_Dinner = document.getElementById("Tuesday_Dinner").value;

   Wednesday_Breakfast = document.getElementById("Wednesday_Breakfast").value;
   Wednesday_MorningSnack = document.getElementById("Wednesday_MorningSnack").value;
   Wednesday_Lunch = document.getElementById("Wednesday_Lunch").value;
   Wednesday_AfternoonSnack = document.getElementById("Wednesday_AfternoonSnack").value;
   Wednesday_Dinner = document.getElementById("Wednesday_Dinner").value;

   Thursday_Breakfast = document.getElementById("Thursday_Breakfast").value;
   Thursday_MorningSnack = document.getElementById("Thursday_MorningSnack").value;
   Thursday_Lunch = document.getElementById("Thursday_Lunch").value;
   Thursday_AfternoonSnack = document.getElementById("Thursday_AfternoonSnack").value;
   Thursday_Dinner = document.getElementById("Thursday_Dinner").value;

   Friday_Breakfast = document.getElementById("Friday_Breakfast").value;
   Friday_MorningSnack = document.getElementById("Friday_MorningSnack").value;
   Friday_Lunch = document.getElementById("Friday_Lunch").value;
   Friday_AfternoonSnack = document.getElementById("Friday_AfternoonSnack").value;
   Friday_Dinner = document.getElementById("Friday_Dinner").value;

   Saturday_Breakfast = document.getElementById("Saturday_Breakfast").value;
   Saturday_MorningSnack = document.getElementById("Saturday_MorningSnack").value;
   Saturday_Lunch = document.getElementById("Saturday_Lunch").value;
   Saturday_AfternoonSnack = document.getElementById("Saturday_AfternoonSnack").value;
   Saturday_Dinner = document.getElementById("Saturday_Dinner").value;

   Sunday_Breakfast = document.getElementById("Sunday_Breakfast").value;
   Sunday_MorningSnack = document.getElementById("Sunday_MorningSnack").value;
   Sunday_Lunch = document.getElementById("Sunday_Lunch").value;
   Sunday_AfternoonSnack = document.getElementById("Sunday_AfternoonSnack").value;
    Sunday_Dinner = document.getElementById("Sunday_Dinner").value;
    if (validEmail() == false) {
        return;
    }

    myText = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");
    myText += visitorName + "'s Meal plan<br>Goal: " + visitorGoal
    myText += "<p>Monday</p>"
    myText += "<p>Breakfast: " + Monday_Breakfast + "<br>MorningSnack: " + Monday_MorningSnack + "<br>Lunch: " + Monday_Lunch + "<br>Afternoon Snack: " + Monday_AfternoonSnack + "<br>Dinner: "+ Monday_Dinner+"</p>";
    myText += "<p>Tuesday</p>"
    myText += "<p>Breakfast: " + Tuesday_Breakfast + "<br>MorningSnack: " + Tuesday_MorningSnack + "<br>Lunch: " + Tuesday_Lunch + "<br>Afternoon Snack: " + Tuesday_AfternoonSnack + "<br>Dinner: "+ Tuesday_Dinner+"</p>";
    myText += "<p>Wednesday</p>"
    myText += "<p>Breakfast: " + Wednesday_Breakfast + "<br>MorningSnack: " + Wednesday_MorningSnack + "<br>Lunch: " + Wednesday_Lunch + "<br>Afternoon Snack: " + Wednesday_AfternoonSnack + "<br>Dinner: "+ Wednesday_Dinner+"</p>";
    myText += "<p>Thursday</p>"
    myText += "<p>Breakfast: " + Thursday_Breakfast + "<br>MorningSnack: " + Thursday_MorningSnack + "<br>Lunch: " + Thursday_Lunch + "<br>Afternoon Snack: " + Thursday_AfternoonSnack + "<br>Dinner: "+ Thursday_Dinner+"</p>";
    myText += "<p>Friday</p>"
    myText += "<p>Breakfast: " + Friday_Breakfast + "<br>MorningSnack: " + Friday_MorningSnack + "<br>Lunch: " + Friday_Lunch + "<br>Afternoon Snack: " + Friday_AfternoonSnack + "<br>Dinner: "+ Friday_Dinner+"</p>";
    myText += "<p>Saturday</p>"
    myText += "<p>Breakfast: " + Saturday_Breakfast + "<br>MorningSnack: " + Saturday_MorningSnack + "<br>Lunch: " + Saturday_Lunch + "<br>Afternoon Snack: " + Saturday_AfternoonSnack + "<br>Dinner: "+ Saturday_Dinner+"</p>";
    myText += "<p>Sunday</p>"
    myText += "<p>Breakfast: " + Sunday_Breakfast + "<br>MorningSnack: " + Sunday_MorningSnack + "<br>Lunch: " + Sunday_Lunch + "<br>Afternoon Snack: " + Sunday_AfternoonSnack + "<br>Dinner: "+ Sunday_Dinner+"</p>";
    myText += ("</body>\n</html>");

    flyWindow = window.open('about:blank','myPop','width=400,height=400,left=400,top=400');
    flyWindow.document.write(myText);
}

document.getElementById("Print_plan").addEventListener('click',print)
function print()
{
    visitorName = document.getElementById("user_name").value;
    visitorGoal = document.getElementById("goal").value;
   Monday_Breakfast = document.getElementById("Monday_Breakfast").value;
   Monday_MorningSnack = document.getElementById("Monday_MorningSnack").value;
   Monday_Lunch = document.getElementById("Monday_Lunch").value;
   Monday_AfternoonSnack = document.getElementById("Monday_AfternoonSnack").value;
   Monday_Dinner = document.getElementById("Monday_Dinner").value;

   Tuesday_Breakfast = document.getElementById("Tuesday_Breakfast").value;
   Tuesday_MorningSnack = document.getElementById("Tuesday_MorningSnack").value;
   Tuesday_Lunch = document.getElementById("Tuesday_Lunch").value;
   Tuesday_AfternoonSnack = document.getElementById("Tuesday_AfternoonSnack").value;
   Tuesday_Dinner = document.getElementById("Tuesday_Dinner").value;

   Tuesday_Breakfast = document.getElementById("Tuesday_Breakfast").value;
   Tuesday_MorningSnack = document.getElementById("Tuesday_MorningSnack").value;
   Tuesday_Lunch = document.getElementById("Tuesday_Lunch").value;
   Tuesday_AfternoonSnack = document.getElementById("Tuesday_AfternoonSnack").value;
   Tuesday_Dinner = document.getElementById("Tuesday_Dinner").value;

   Wednesday_Breakfast = document.getElementById("Wednesday_Breakfast").value;
   Wednesday_MorningSnack = document.getElementById("Wednesday_MorningSnack").value;
   Wednesday_Lunch = document.getElementById("Wednesday_Lunch").value;
   Wednesday_AfternoonSnack = document.getElementById("Wednesday_AfternoonSnack").value;
   Wednesday_Dinner = document.getElementById("Wednesday_Dinner").value;

   Thursday_Breakfast = document.getElementById("Thursday_Breakfast").value;
   Thursday_MorningSnack = document.getElementById("Thursday_MorningSnack").value;
   Thursday_Lunch = document.getElementById("Thursday_Lunch").value;
   Thursday_AfternoonSnack = document.getElementById("Thursday_AfternoonSnack").value;
   Thursday_Dinner = document.getElementById("Thursday_Dinner").value;

   Friday_Breakfast = document.getElementById("Friday_Breakfast").value;
   Friday_MorningSnack = document.getElementById("Friday_MorningSnack").value;
   Friday_Lunch = document.getElementById("Friday_Lunch").value;
   Friday_AfternoonSnack = document.getElementById("Friday_AfternoonSnack").value;
   Friday_Dinner = document.getElementById("Friday_Dinner").value;

   Saturday_Breakfast = document.getElementById("Saturday_Breakfast").value;
   Saturday_MorningSnack = document.getElementById("Saturday_MorningSnack").value;
   Saturday_Lunch = document.getElementById("Saturday_Lunch").value;
   Saturday_AfternoonSnack = document.getElementById("Saturday_AfternoonSnack").value;
   Saturday_Dinner = document.getElementById("Saturday_Dinner").value;

   Sunday_Breakfast = document.getElementById("Sunday_Breakfast").value;
   Sunday_MorningSnack = document.getElementById("Sunday_MorningSnack").value;
   Sunday_Lunch = document.getElementById("Sunday_Lunch").value;
   Sunday_AfternoonSnack = document.getElementById("Sunday_AfternoonSnack").value;
    Sunday_Dinner = document.getElementById("Sunday_Dinner").value;
    
    if (validEmail() == false) {
        return;
    }

    myText = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");
    myText += visitorName + "'s Meal plan<br>Goal: " + visitorGoal
    myText += "<p>Monday</p>"
    myText += "<p>Breakfast: " + Monday_Breakfast + "<br>MorningSnack: " + Monday_MorningSnack + "<br>Lunch: " + Monday_Lunch + "<br>Afternoon Snack: " + Monday_AfternoonSnack + "<br>Dinner: "+ Monday_Dinner+"</p>";
    myText += "<p>Tuesday</p>"
    myText += "<p>Breakfast: " + Tuesday_Breakfast + "<br>MorningSnack: " + Tuesday_MorningSnack + "<br>Lunch: " + Tuesday_Lunch + "<br>Afternoon Snack: " + Tuesday_AfternoonSnack + "<br>Dinner: "+ Tuesday_Dinner+"</p>";
    myText += "<p>Wednesday</p>"
    myText += "<p>Breakfast: " + Wednesday_Breakfast + "<br>MorningSnack: " + Wednesday_MorningSnack + "<br>Lunch: " + Wednesday_Lunch + "<br>Afternoon Snack: " + Wednesday_AfternoonSnack + "<br>Dinner: "+ Wednesday_Dinner+"</p>";
    myText += "<p>Thursday</p>"
    myText += "<p>Breakfast: " + Thursday_Breakfast + "<br>MorningSnack: " + Thursday_MorningSnack + "<br>Lunch: " + Thursday_Lunch + "<br>Afternoon Snack: " + Thursday_AfternoonSnack + "<br>Dinner: "+ Thursday_Dinner+"</p>";
    myText += "<p>Friday</p>"
    myText += "<p>Breakfast: " + Friday_Breakfast + "<br>MorningSnack: " + Friday_MorningSnack + "<br>Lunch: " + Friday_Lunch + "<br>Afternoon Snack: " + Friday_AfternoonSnack + "<br>Dinner: "+ Friday_Dinner+"</p>";
    myText += "<p>Saturday</p>"
    myText += "<p>Breakfast: " + Saturday_Breakfast + "<br>MorningSnack: " + Saturday_MorningSnack + "<br>Lunch: " + Saturday_Lunch + "<br>Afternoon Snack: " + Saturday_AfternoonSnack + "<br>Dinner: "+ Saturday_Dinner+"</p>";
    myText += "<p>Sunday</p>"
    myText += "<p>Breakfast: " + Sunday_Breakfast + "<br>MorningSnack: " + Sunday_MorningSnack + "<br>Lunch: " + Sunday_Lunch + "<br>Afternoon Snack: " + Sunday_AfternoonSnack + "<br>Dinner: "+ Sunday_Dinner+"</p>";
    myText += ("</body>\n</html>");

    flyWindow = window.open('about:blank','myPop','width=400,height=400,left=400,top=400');
    flyWindow.document.write(myText);
    flyWindow.window.print();
}

document.getElementById("Download_plan").addEventListener('click',Download)
function Download() 
  {
    visitorName = document.getElementById("user_name").value;
    visitorGoal = document.getElementById("goal").value;
   Monday_Breakfast = document.getElementById("Monday_Breakfast").value;
   Monday_MorningSnack = document.getElementById("Monday_MorningSnack").value;
   Monday_Lunch = document.getElementById("Monday_Lunch").value;
   Monday_AfternoonSnack = document.getElementById("Monday_AfternoonSnack").value;
   Monday_Dinner = document.getElementById("Monday_Dinner").value;

   Tuesday_Breakfast = document.getElementById("Tuesday_Breakfast").value;
   Tuesday_MorningSnack = document.getElementById("Tuesday_MorningSnack").value;
   Tuesday_Lunch = document.getElementById("Tuesday_Lunch").value;
   Tuesday_AfternoonSnack = document.getElementById("Tuesday_AfternoonSnack").value;
   Tuesday_Dinner = document.getElementById("Tuesday_Dinner").value;

   Tuesday_Breakfast = document.getElementById("Tuesday_Breakfast").value;
   Tuesday_MorningSnack = document.getElementById("Tuesday_MorningSnack").value;
   Tuesday_Lunch = document.getElementById("Tuesday_Lunch").value;
   Tuesday_AfternoonSnack = document.getElementById("Tuesday_AfternoonSnack").value;
   Tuesday_Dinner = document.getElementById("Tuesday_Dinner").value;

   Wednesday_Breakfast = document.getElementById("Wednesday_Breakfast").value;
   Wednesday_MorningSnack = document.getElementById("Wednesday_MorningSnack").value;
   Wednesday_Lunch = document.getElementById("Wednesday_Lunch").value;
   Wednesday_AfternoonSnack = document.getElementById("Wednesday_AfternoonSnack").value;
   Wednesday_Dinner = document.getElementById("Wednesday_Dinner").value;

   Thursday_Breakfast = document.getElementById("Thursday_Breakfast").value;
   Thursday_MorningSnack = document.getElementById("Thursday_MorningSnack").value;
   Thursday_Lunch = document.getElementById("Thursday_Lunch").value;
   Thursday_AfternoonSnack = document.getElementById("Thursday_AfternoonSnack").value;
   Thursday_Dinner = document.getElementById("Thursday_Dinner").value;

   Friday_Breakfast = document.getElementById("Friday_Breakfast").value;
   Friday_MorningSnack = document.getElementById("Friday_MorningSnack").value;
   Friday_Lunch = document.getElementById("Friday_Lunch").value;
   Friday_AfternoonSnack = document.getElementById("Friday_AfternoonSnack").value;
   Friday_Dinner = document.getElementById("Friday_Dinner").value;

   Saturday_Breakfast = document.getElementById("Saturday_Breakfast").value;
   Saturday_MorningSnack = document.getElementById("Saturday_MorningSnack").value;
   Saturday_Lunch = document.getElementById("Saturday_Lunch").value;
   Saturday_AfternoonSnack = document.getElementById("Saturday_AfternoonSnack").value;
   Saturday_Dinner = document.getElementById("Saturday_Dinner").value;

   Sunday_Breakfast = document.getElementById("Sunday_Breakfast").value;
   Sunday_MorningSnack = document.getElementById("Sunday_MorningSnack").value;
   Sunday_Lunch = document.getElementById("Sunday_Lunch").value;
   Sunday_AfternoonSnack = document.getElementById("Sunday_AfternoonSnack").value;
    Sunday_Dinner = document.getElementById("Sunday_Dinner").value;
    
    if (validEmail() == false) {
        return;
    }

    myText = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");
    myText += visitorName + "'s Meal plan<br>Goal: " + visitorGoal
    myText += "<p>Monday</p>"
    myText += "<p>Breakfast: " + Monday_Breakfast + "<br>MorningSnack: " + Monday_MorningSnack + "<br>Lunch: " + Monday_Lunch + "<br>Afternoon Snack: " + Monday_AfternoonSnack + "<br>Dinner: "+ Monday_Dinner+"</p>";
    myText += "<p>Tuesday</p>"
    myText += "<p>Breakfast: " + Tuesday_Breakfast + "<br>MorningSnack: " + Tuesday_MorningSnack + "<br>Lunch: " + Tuesday_Lunch + "<br>Afternoon Snack: " + Tuesday_AfternoonSnack + "<br>Dinner: "+ Tuesday_Dinner+"</p>";
    myText += "<p>Wednesday</p>"
    myText += "<p>Breakfast: " + Wednesday_Breakfast + "<br>MorningSnack: " + Wednesday_MorningSnack + "<br>Lunch: " + Wednesday_Lunch + "<br>Afternoon Snack: " + Wednesday_AfternoonSnack + "<br>Dinner: "+ Wednesday_Dinner+"</p>";
    myText += "<p>Thursday</p>"
    myText += "<p>Breakfast: " + Thursday_Breakfast + "<br>MorningSnack: " + Thursday_MorningSnack + "<br>Lunch: " + Thursday_Lunch + "<br>Afternoon Snack: " + Thursday_AfternoonSnack + "<br>Dinner: "+ Thursday_Dinner+"</p>";
    myText += "<p>Friday</p>"
    myText += "<p>Breakfast: " + Friday_Breakfast + "<br>MorningSnack: " + Friday_MorningSnack + "<br>Lunch: " + Friday_Lunch + "<br>Afternoon Snack: " + Friday_AfternoonSnack + "<br>Dinner: "+ Friday_Dinner+"</p>";
    myText += "<p>Saturday</p>"
    myText += "<p>Breakfast: " + Saturday_Breakfast + "<br>MorningSnack: " + Saturday_MorningSnack + "<br>Lunch: " + Saturday_Lunch + "<br>Afternoon Snack: " + Saturday_AfternoonSnack + "<br>Dinner: "+ Saturday_Dinner+"</p>";
    myText += "<p>Sunday</p>"
    myText += "<p>Breakfast: " + Sunday_Breakfast + "<br>MorningSnack: " + Sunday_MorningSnack + "<br>Lunch: " + Sunday_Lunch + "<br>Afternoon Snack: " + Sunday_AfternoonSnack + "<br>Dinner: "+ Sunday_Dinner+"</p>";
    myText += ("</body>\n</html>");

    flyWindow = window.open('about:blank','myPop','width=400,height=400,left=400,top=400');
    flyWindow.document.write(myText);
    
};

document.getElementById("Clear_plan").addEventListener('click',clearInput)
function clearInput() {
    document.getElementById("myForm").reset();

  }



function validEmail() {
    Email = document.getElementById("email")

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (Email.value.match(validRegex)) {
    return true;

  } else {

    alert("Invalid email address!");
    return false;

  }

}
