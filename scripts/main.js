
((window.gitter = {}).chat = {}).options = {
  room: 'thepracticaldev/1pr',
  useStyles: false
};

function toggleSidebar(){
	sidebar     = document.getElementById("sidebar");
	if (sidebar.style.display == 'none') {
		sidebar.style.display = 'block';
	} else if (sidebar.style.display == 'block') {
		sidebar.style.display = 'none';	
	}
	else {
		sidebar.style.display = 'block';
	}
}