nextPage2.onclick=function(){
  ChangeForm(favExercises)
}

Radiobutton1.onchange=function(s){
    let userChoice = $("input[name=Radiobutton1]:checked").prop("value")
    lblPersonalityMessage.value = `I would agree that you are a ${userChoice} person.`
}
