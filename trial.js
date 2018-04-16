function loadcraziness(ini=14,fi=33) {
			var rand = _.sample(_.range(ini,fi),10);
			for(i=1; i<11; ++i) {
				id1 = "n"+i;
				document.getElementById(id1).innerHTML = rand[i-1];
				document.getElementById(id1).style.top = document.getElementById("lab").getBoundingClientRect().top + i*50 + "px";
				document.getElementById(id1).style.visibility="visible";
				id2 = id1 + "sol";
				document.getElementById(id2).innerHTML = "solution";
				document.getElementById(id2).style.top = document.getElementById("lab").getBoundingClientRect().top + i*50 +10 + "px";
				document.getElementById(id1).style.left = document.getElementById("lab").getBoundingClientRect().left + "px";
				document.getElementById(id2).style.left = document.getElementById("labsol").getBoundingClientRect().left + 100 + "px";
				document.getElementById(id2).style.visibility="visible";
				id3="ans"+i;
				document.getElementById(id3).style.top = document.getElementById("lab").getBoundingClientRect().top + i*50 -5 + "px";
				document.getElementById(id3).style.left = document.getElementById("labsol").getBoundingClientRect().left +"px";
				}
			document.getElementById("load").innerHTML = "load";
		}

		function aux(){			
			var x = [1,2,3,4,5,6,7];			
			var rnd5 = _.uniq(_.sample(x,5));		
			res="";
			for(i=0; i<rnd5.length; ++i) res= res + " " + rnd5[i]; 
			i=3;
			document.getElementById("aux").innerHTML = 10 + 20*3 + "px";
		}
