rdoCharacteristics.onchange=function(){
  console.log(`The value property of the control is ${rdoCharacteristics.value}`)
  
  if (rdoCharacteristics.value == 0)   // picked the first choice
    lblMessage.value = (`I would agree that you are a optimistic person too!`)
  else if (rdoCharacteristics.value == 1)
      lblMessage.value = (`I would agree that you are a pesimistic person too!`)
    else if (rdoCharacteristics.value == 2)
      lblMessage.value = (`I would agree that you are a trusting person too!`)
    else if (rdoCharacteristics.value == 3)
      lblMessage.value = (`I would agree that you are a envious person too!`)
}

btnNextPage.onclick=function(){
  ChangeForm(favExercises)
}


