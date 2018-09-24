var mou=false;

function  bombolleja(n=1){
    var data = new Date();
    var secs = Math.round(data.getTime()/1000);
    document.getElementById('help2').innerHTML = secs;
    
    if(secs % 4 ==0) {
        html = document.getElementById('pantalla').innerHTML;
        document.getElementById('pantalla').innerHTML = 
        html +"<div id='bombin"+n+"' onclick='estrella('bombin"+n+"') style='position:fixed;top:450px;left:565px'>" + 
        document.getElementById('bombi1').innerHTML + "</div>";
        vola("bombin"+n);
    }
    setTimeout(bombolleja,1000,n+1);
}
    

function estrella(id) {
    document.getElementById(id).innerHTML = document.getElementById('estrella').innerHTML;
     setTimeout(function(){ document.getElementById(id).style.visibility="hidden"; }, 500);
    }

function vola(id,vx=0,ax=0,vy=-1,ay=0,smoth=0) {
    var data = new Date();
    var secs = Math.round(data.getTime()/1000);    
    
    if(mou==false) return;
    y = document.getElementById(id).getBoundingClientRect().top;
    x =  document.getElementById(id).getBoundingClientRect().left;
   
  
    
    if(secs % 3 ==0 & mou) {
        ax = 3*Math.random() -1.5; if(x==20) ax= ax+0.2; if(x==1400) ax=ax-0.2;
        ay=2*Math.random() -1; if(y==20) ay= ay+0.2; if(y==600) ay=ay-0.2;
        smoth = 1;
    }
    
    vx=vx + ax*smoth; vx = Math.min(vx,8); vx = Math.max(vx,-8);
    vy=vy + ay*smoth; vy = Math.min(vy,3); vy = Math.max(vy,-3);
    smoth=smoth/2;
    y = y + vy; y = Math.max(y,20); y=Math.min(y,600);
    x = x + vx; x = Math.max(x,20); x=Math.min(x,1400);
    //document.getElementById('help').innerHTML = "x: "+Math.round(x)+"px, y=" + Math.round(y)+"px, vx= "+Math.round(vx)+"px, vy="+Math.round(vy)+"px";
    document.getElementById(id).style.top = y + "px";
    document.getElementById(id).style.left = x  + "px";
    
    setTimeout(vola,20,id,vx,ax,vy,ay,smoth);
    
}