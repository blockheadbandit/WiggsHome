document.getElementById("musicButton").addEventListener("click", musicDropdown,false)
document.getElementById("progButton").addEventListener("click", progDropdown,false)
console.log("Listners added")




mclicked = false
pclicked = false
function musicDropdown(){
  mclicked = !mclicked
  if (mclicked === true){
    if (pclicked == true){
      document.getElementById("Progmenu").style.display = "none";
      pclicked = !pclicked
    }
    document.getElementById("Musicmenu").style.display = "contents";
    
  }
  else{
    document.getElementById("Musicmenu").style.display = "none";
  }
  
}
function progDropdown(){
  pclicked = !pclicked
  if(pclicked === true){
    if(mclicked == true){
      document.getElementById("Musicmenu").style.display = "none";
      mclicked = !mclicked
    }
    document.getElementById("Progmenu").style.display = "contents";
  }else{
    document.getElementById("Progmenu").style.display = "none";
  }
  
}