function randbolet (id='alo') {
    var colors=['chartreuse','lawngreen','lime','limegreen','palegreen',
    'lightgreen','mediumspringgreen','springgreen','yellowgreen','darkseagreen',
    'pink','lightcoral','papayawhip','peachpuff'];
    parraf='';
    x=0;y=0;big=0;
    for(i=1;i<11;i++) {
        x= Math.round(250*Math.random());
        y= Math.round(20+500*Math.random());
        big=20+Math.round(20*Math.random());
        color = _.sample(colors);
        linia = '<div class="boleta" style="top:'+y+'px;left:'+x+
        'px;background-color:'+color+';width:'+big+'px;height:'+big+
        'px;border-radius:'+big+'px">  </div>';
        parraf=parraf+linia;
    }
   
     document.getElementById(id).innerHTML = parraf;
}

function randbolet2 (id='alo') {
    var colors=['saddlebrown','lightcoral','chocolate','brown','lightsalmon',
    'burlywood','darkgoldenrod','maroon','indianred','lightslategray',
    'pink','orange','papayawhip','peachpuff'];
    parraf='';
    x=0;y=0;big=0;
    for(i=1;i<11;i++) {
        x= Math.round(250*Math.random());
        y= Math.round(20+500*Math.random());
        big=20+Math.round(20*Math.random());
        color = _.sample(colors);
        linia = '<div class="boleta" style="top:'+y+'px;left:'+x+
        'px;background-color:'+color+';width:'+big+'px;height:'+big+
        'px;border-radius:'+big+'px">  </div>';
        parraf=parraf+linia;
    }
   
     document.getElementById(id).innerHTML = parraf;
}

function llenga(lang='cat') {
    if(lang=='cat') {
        document.getElementById('salist').innerHTML = document.getElementById('catlist').innerHTML;
    }
    if(lang=='eng') {
        document.getElementById('salist').innerHTML = document.getElementById('englist').innerHTML;
    }
    if(lang=='cas') {
        document.getElementById('salist').innerHTML = document.getElementById('caslist').innerHTML;
    }
}