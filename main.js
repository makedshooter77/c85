canvas=document.getElementById("myCanvas");
ctx =canvas.getContext("2d");
nasa_img=["n1.jpg","n2.jpg","n3.jpg","mars.jpg"];
r_n=Math.floor(Math.random()*4);
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_img=nasa_img[r_n];
console.log("background_img="+background_img)
rover_img="rover.png";
function add(){
background_imgta=new Image();
background_imgta.onload=uploadbackground;
background_imgta.src=background_img;

rover_imgta=new Image();
rover_imgta.onload=uploadrover;
rover_imgta.src=rover_img;


}


function uploadbackground(){
ctx.drawImage(background_imgta,0,0,canvas.width,canvas.height)

    









    

}
function uploadrover(){
    ctx.drawImage(rover_imgta,rover_x,rover_y,rover_width,rover_height);



}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38'){
up()
console.log("up")
}
if(keyPressed=='40'){
    down()
    console.log("down")
}
if(keyPressed=='37'){
    left()
    console.log("left")
}
if(keyPressed=='39'){
    right()
    console.log("right")
}
}
function up(){
if(rover_y>=0){
rover_y=rover_y-10;
console.log("when up arrow is presssed,x="+rover_x+"y="+rover_y);
uploadbackground();
uploadrover();


}



}
function down(){
    if(rover_y<=500){
    rover_y=rover_y+10;
    console.log("when up arrow is presssed,x="+rover_x+"y="+rover_y);
    uploadbackground();
    uploadrover();
    
    
    }
}
function left(){
    if(rover_x>=0){
    rover_x=rover_x-10;
    console.log("when up arrow is presssed,x="+rover_x+"y="+rover_y);
    uploadbackground();
    uploadrover();
    
    
    }
}
function right(){
    if(rover_x<=700){
    rover_x=rover_x+10;
    console.log("when up arrow is presssed,x="+rover_x+"y="+rover_y);
    uploadbackground();
    uploadrover();
    
    
    }
}