import axios from 'axios'

let send_notification = {}

send_notification.send = function (title,body,data,user_id) {
  var fcms = null

  axios
    .get("/fcm/"+user_id)
    .then(res => {
      fcms = res.data
    })
    .catch(err => {
      console.log(err)
    }).finally(() => {

      if(fcms != null ){
        fcms.forEach((fcm) =>{
        
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://fcm.googleapis.com/fcm/send", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.setRequestHeader("Authorization", 'key=AAAAIBySC0A:APA91bHXO2m_L4HE1LmXuOkZIsTm961V0eqZ8VJY-8g4aQjg_QZ4OLcyGcLOJsJQMRnaCiGxpobShtWJe1PSLrwNB2-glk3FEWKWBNyGC0NkcpMBC2J7i7ygFHJm3n78ZoAzo825ygVh');
            let res = {
              'notification': {
                'title': title,
                'body': body 
              },
              ...data,
              'to': fcm.token,
              "priority": "high"
            }

            xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                console.log(xhttp.responseText)
              }
            };
            xhttp.send(JSON.stringify(res))
        }) 
      }
    });
}

export default send_notification

//