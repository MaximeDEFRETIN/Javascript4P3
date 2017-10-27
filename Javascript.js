function mdp(){
  var mdp = document.getElementById('motdepasse').value;
  var ok = document.getElementById('confirmation').value;

  if(mdp == ok){
    document.getElementById('motdepasse').style.border='green 3px solid';
    document.getElementById('confirmation').style.border='green solid 3px';
  }
 else if(mdp != ok){
    document.getElementById('motdepasse').style.border='red 3px solid';
    document.getElementById('confirmation').style.border='red 3px solid';
  }
}
