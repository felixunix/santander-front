$("[data-toggle=popover]").popover();

const $forms = document.querySelectorAll(".signup-form")

const geTemplate = () => {
    return fetch("./template.html")
    .then((response) => response.text())
}

const sendEmailToApi = (address, template) => {
    fetch(`https://bedu-email-sender-api.herokuapp.com/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: address,
        template: template,
      }),
    })
      .then((results) => {
        console.log(results.status);
        if(results.status ==200){
            alert("E-mail send!!!")
        } else {
            alert("send failed")
        }
        document.getElementById("email").value = ""
        
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("email").value = ""
        alert("Send failed")
      });
  };
  
  const sendEmail = (event) => {
    event.preventDefault();
    const email = event.target.querySelector("input").value;
    getTemplate()
      .then((template) => {
        sendEmailToApi(email, template);
      })
      .catch((error) => {
        console.log(error, "error al convertir el template.");
    });
  };
  
  for (let i = 0; i < $forms.length; i++) {
    $forms[i].addEventListener("submit", sendEmail);
  }

function sendEmail(miVariable) {
    miVariable.preventDefault()
    const email = miVariable.target.querySelector("input").value
    getTemplate()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error, "error al obtener el templete");
      })
  }

console.log($forms);

for(let i = 0; i < forms.length; i++) {
    //console.log(forms[i]);
    forms[i].addEventListener("submit", sendEmail)

}