//Open your profile and go to my network and load as many recommened people list you want to send the request to
//https://www.linkedin.com/mynetwork/

// get all the loaded recommendations 
var send_request = document.getElementsByClassName("js-discover-person-card__action-btn full-width artdeco-button artdeco-button--2 artdeco-button--full artdeco-button--secondary ember-view");

//send invites to all the people whose name is displayed in the recommended tab
for(let i=0; i<t.length; i++)
  t[i].click();