//Open the linkedin invites https://www.linkedin.com/mynetwork/invitation-manager/
//Run the below script in web browser's console to accept all invitaions in one go

//invites contains an array of buttons
const invites = document.getElementsByClassName("invitation-card__action-btn button-secondary-medium ");

//Try to print invites
console.log(invites);

//Accepting all invitations at one go
for(let i = 0; i<invites.length; i++)
{
	invites[i].click();
}