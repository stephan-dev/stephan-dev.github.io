 function popup1() {
  	window.alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");
    }

  function popup2() {
  	if(window.confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please") == true) {
      window.location = "https://youtu.be/AVbQo3IOC_A?t=7";
    } else {
      return false;
    }
  }

 // function popup2() {
 //   window.confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")
 //   if(window.confirm == true) {
 //     window.location = "https://youtu.be/AVbQo3IOC_A?t=7";
 //     } else {
 //       return;
 //     }
 //   }

  setTimeout(popup1, 10000);
  setTimeout(popup2, 20000);