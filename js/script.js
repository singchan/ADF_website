

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1196},"pages":[{"id":"page-index","displayName":"index","link":{"linkType":"LinkTypePage","href":"#!page-index"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-test","displayName":"TEST","link":{"linkType":"LinkTypePage","href":"#!page-test"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
function handleClick(myRadio) {
    if(myRadio.value =="1")
		{
			form_devis1.style.display = "block";
			form_devis2.style.display = "none";
		}
		else
		{
			form_devis2.style.display = "block";
			form_devis1.style.display = "none";
		}
}

function rgpd() {
  var txt;
  var r = confirm("blablabla");
  if (r == true)
  {
		document.getElementById("submit").disabled = false;
		document.getElementById("submit2").disabled = false;
  } 
  else
  {
		document.getElementById("submit").disabled = true;
		document.getElementById("submit2").disabled = true;
  }
}

