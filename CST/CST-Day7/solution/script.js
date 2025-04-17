

onload=function(){
    document.getElementById("btn1").onclick=function(event){
        console.log(event)
        console.log("helo");
        console.log(this);
        console.log(this.value)
    }
    this.document.getElementsByTagName("a")[0].onclick=function(){
        alert("heelo");
        return false;
        location.assign("google");
    }

  
}



