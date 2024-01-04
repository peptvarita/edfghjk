canvas=document.getElementById("myCanvas")
dim=canvas.getContext("2d")
i=["forest1.png","flat-jungle3.avif","forest3.jpg","forest4.jpg"]
r=Math.floor(Math.random()*4)


bg=i[r]
ro="human.jpg"
roverwidth=100
roverheight=100
roverx=10
rovery=10

function add(){
backgroundimage=new Image()
backgroundimage.onload=uploadbg
backgroundimage.src=bg

roverimage=new Image()
roverimage.onload=uploadrover
roverimage.src=ro
}

function uploadbg(){
dim.drawImage(backgroundimage,0,0,canvas.width,canvas.width)
}

function uploadrover(){
 dim.drawImage(roverimage,roverx,rovery,roverwidth,roverheight)   
}

window.addEventListener("keydown",mykeydown)
function mykeydown(e){
kp=e.keyCode
if(kp=="38"){up()
    console.log("tvarita pressed up")}

    if(kp=="40"){down()
        console.log("tvarita pressed down")}

        if(kp=="37"){left()
            console.log("tvarita pressed left")}

            if(kp=="39"){right()
                console.log("tvarita pressed right")}
}

function up(){
if(rovery>=0)
{
rovery=rovery-10
uploadbg()
uploadrover()
}
}

function down(){
    if(rovery<=500)
    {
    rovery=rovery+10
    uploadbg()
    uploadrover()
    }
    }

function left(){
if(roverx>=0)
{
roverx=roverx-10
uploadbg()
uploadrover()
}
}

function right(){
    if(roverx<=700)
    {
    roverx=roverx+10
    uploadbg()
    uploadrover()
    }
    }
    




