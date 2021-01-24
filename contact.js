
function collectcontactdata(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value
    contactInfo = new contactinfo(name, email, message)
    console.log(contactInfo)

}
function contactinfo(name, email, message){
    this.name = name
    this.email = email
    this.message = message
}