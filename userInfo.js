//  DEFINING FUNCTION THAT WILL EXTRACT QUERY PARAMETERS FROM MY URL (WHEN USER ENDS IN CONFIRMATION
//  PAGE) AND DISPLAYING A THANK YOU MESSAGE WITH THE USER NAME
function dispUserInfo() {
    let params = new URL(document.location).searchParams;
    let firstname = params.get('firstname');   
    let lastname = params.get('lastname');
    console.log(firstname);
    console.log(lastname);
    document.querySelector('#fst').innerHTML = firstname;
    document.querySelector('#lst').innerHTML = lastname;
}

//  DEFINING THE PAGE TITLE
let pageTitle = "submitMessage";
console.log(document.title);
//  DECIDING WHEN TO RUN displayUserInfo() BASED ON THE TITLE OF THE PAGE
if (document.title === pageTitle) {
  dispUserInfo();
};