
let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  selExercises.clear()   
    for (i=0;i<=exercises.length;i++)
      selExercises.addItem(exercises[i])
    for (i=0;i<=coreExercises.length;i++)
      selExercises.addItem(coreExercises[i])
}

btnNextPage3.onclick=function(){
 ChangeForm(mobileNav)
}

btnSubmitExercise.onclick=function(){
  let message = "Your favorite exercises are: "
  for (i = 0; i < selExercises.text.length; i++)
    message = message + selExercises.text[i] + ", "
  lblExercises.value = message
}
