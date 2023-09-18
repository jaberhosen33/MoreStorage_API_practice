const sendData=()=>{
const namefield=document.getElementById('name');
const emailfield=document.getElementById('email');
const commentfield=document.getElementById('comment');
 const name=namefield.value ;
 const email=emailfield.value ;
 const comment=commentfield.value;
console.log(name,email,comment)
displayData(name,email,comment);
SetDataOnStorage(name,email,comment);

}

const displayData=(name,email,comment)=>{
    document.getElementById('Name').innerText=name;
    document.getElementById('Email').innerText=email;
    document.getElementById('Comment').innerText=comment;
}


const GetDataOnStorage=()=>{

    let data={};
    const getdata=localStorage.getItem('data');
    if(getdata){
        data=JSON.parse(getdata);
    }
    return data;
}



const SetDataOnStorage=(name,email,comment)=>{
const GetData=GetDataOnStorage();
// GetData['data']={name:name,email:email,comment:comment};
GetData["name"]=name;
GetData["email"]=email;
GetData["comment"]=comment;
const convertString=JSON.stringify(GetData)
localStorage.setItem('data',convertString)
 console.log(convertString);
}