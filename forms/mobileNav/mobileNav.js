mobileNav.onshow=function(){
   hmbMenu.clear()
   hmbMenu.addItem("Dessert Voting")
   hmbMenu.addItem("Describe You")
   hmbMenu.addItem("Favorite Exercises")
   hmbMenu.addItem("Mobile Nav")
}

hmbMenu.onclick=function(s){
  if(typeof(s) == "object"){
    return
  } else
  switch(s){
    case "Dessert Voting":
      ChangeForm(dessertVoting)
      break
    case "Describe You":
      ChangeForm(describeYou)
      break
    case "Favorite Exercises":
      ChangeForm(favExercises)
      break
    case "Favorite Exercises":
      ChangeForm(mobileNav)
      break
      }
    }

