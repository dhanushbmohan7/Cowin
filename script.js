
 var today=new Date();
 var dt=today.getDate();
 console.log(dt)
 document.getElementById('dates').value=dt

var district_id=0
function district(val){
       console.log(val);
       district_id=val
      
       if(district_id==297){
              document.getElementById("place").innerHTML='Kannur'
       }
       else if(district_id==305)
              {
                     document.getElementById("place").innerHTML='Calicut'
       }
       else if(district_id==295){
              document.getElementById("place").innerHTML='Kasargode'

       }
       else if(district_id==311){
              document.getElementById("place").innerHTML='Lakswadeep'
       }
       var x=document.getElementById('dates').value
       const urls='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+district_id+'&date='+x+'-05-2021'
       get_api(urls)
     
}


function changeDate(){
      console.log('disterict id  '+district_id)
      
       var x=document.getElementById('dates').value
      
       x++
       document.getElementById('dates').value=x
       console.log(x)
       const urls='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+district_id+'&date='+x+'-05-2021'
get_api(urls)
}
function decrementDate(){
       var x=document.getElementById('dates').value
       if (x<12){
              document.getElementById('dates').value=12
       }
       else{

       
      
       x--
       document.getElementById('dates').value=x
       console.log(x)
       }
       const urls='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+district_id+'&date='+x+'-05-2021'
get_api(urls)
}




async function get_api(url){

const response = await fetch(url);



var data=await response.json();
if (data.length!=null){

       console.log('if condition data'+data)


}
else{
       console.log('no data founbd')
       
             
}
var table=document.getElementById('result3');
var row=table.insertRow(0);
var cell1=row.insertCell(0);
var cell2=row.insertCell(1);



var text="";
for(i in data){
console.log(data[i]);
document.getElementById("result").innerHTML=data[i];
for (j in data[i]){
      
      result=data[i][j];
      console.log(result);

      text=text+result.min_age_limit+"  "+result.name+"<br>";
      
}


}
if (data){
document.getElementById("result").innerHTML=text;

}
else{
alert("none")
data=None
document.getElementById("result").innerHTML=data;
}






}


// setTimeout(function(){
//        location.reload();
// },2000)
