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

        const awsAxios = axios.create({
          transformRequest: (data, headers) => {
             delete headers.common;
          }
        });
        
        fcms.forEach((fcm) =>{
           let send_data = {
            notification :{
              title : title,
              body : body,
            },
            data : data,
            to : fcm.token
          }
          
          awsAxios.post('https://fcm.googleapis.com/fcm/send', send_data, {
            headers: {
              "Content-Type": "application/json",
              "Authorization" : "key=AAAAIBySC0A:APA91bHXO2m_L4HE1LmXuOkZIsTm961V0eqZ8VJY-8g4aQjg_QZ4OLcyGcLOJsJQMRnaCiGxpobShtWJe1PSLrwNB2-glk3FEWKWBNyGC0NkcpMBC2J7i7ygFHJm3n78ZoAzo825ygVh",
            }
          }
          ).then(resp => {
          console.log(resp.data)
          })
          .catch(err => {
          console.log(err)
          });

        }) 
      }
    });
}

export default send_notification

//