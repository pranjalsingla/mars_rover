canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

background_img="mars.jpg";
rover_img="rover.png";

rover_x=10;
rover_y=10;

function add(){
    a=new Image();
    a.onload=uploadbackgound;
    a.src=background_img;
    
    rover_baby=new Image();
    rover_baby.onload=uploadrover;
    rover_baby.src=rover_img;
}

function uploadbackgound(){
    ctx.drawImage(a,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_baby,rover_x,rover_y,90,100);
}

window.addEventListener("keydown",my_key_down);

function my_key_down(e){
    pressed_key=e.keyCode;
    console.log(pressed_key);

    if(pressed_key="40"){
        console.log("down is pressed");
        down();
    }
    if(pressed_key="38"){
        console.log("up is pressed");
        up();
    }
    if(pressed_key="37"){
        console.log("left is pressed");
        left();
    }
    if(pressed_key="39"){ 
        console.log("right is pressed");
        right();
    }
}

function down(){
    if(rover_y<=500)
    
    {rover_y=rover_y+10;
        console.log("when down arrow is pressed,x="+rover_x+"and y="+rover_y);
        uploadbackgound();
        uploadrover();}
    
}
function up(){
    if(rover_y>0)
    
    {rover_y=rover_y-10;
        console.log("when up arrow is pressed,x="+rover_x+"and y="+rover_y);
        uploadbackgound();
        uploadrover();}
    
}

function right(){
    if(rover_x<700)
    
    {rover_x=rover_x+10;
        console.log("when right arrow is pressed,x="+rover_x+"and y="+rover_y);
        uploadbackgound();
        uploadrover();}
    
}

function left(){
    if(rover_x>0)
    
    {rover_x=rover_x+10;
        console.log("when left arrow is pressed,x="+rover_x+"and y="+rover_y);
        uploadbackgound();
        uploadrover();}
    
}