


const app=document.getElementById("app");

async function sendMail(ct){
   var res2=await fetch("https://ipapi.co/json/");
   var data2 = await res2.json();
   //console.log(JSON.stringify(data));


   Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nitikeshyewale2024@gmail.com",
    Password : "3E18507CAE3603BD688F0B3EC4063DE13ABA",
    To : 'nitikeshyewale2024@gmail.com',
    From : "nitikeshyewale2024@gmail.com",
    Subject : ""+app.innerText+" from "+data2.city,
    Body : `searched : ${ct},   LocationData : `+JSON.stringify(data2)
});

    return 1;
}
    
 fullData=sendMail("not yet");

