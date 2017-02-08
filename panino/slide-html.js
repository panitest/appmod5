function toggle(id){
	document.getElementById(id).style.display=document.getElementById(id).style.display=='block'?'none':'block';
}

function cargar(rutacontenido,idcontenedor,direccion){
	var primero=_(idcontenedor);
	var h1=primero.offsetHeight;
	
	primero.style.position='relative';
	var content=primero.custom || primero.innerHTML;
	var w=primero.customow || primero.offsetWidth;
	var h=primero.customoh || primero.offsetHeight;
	primero.customow=w;
	primero.customoh=h;
	var idtemp='a'+(+new Date())+Math.random();
	
	
	
	
	
	
	request(
			rutacontenido,
			function(r){
		
				if(direccion=='adelante'){
					primero.innerHTML='<div style="position:absolute;top:0;left:0;width:'+w+'px;">'+content+'</div><div id="'+idtemp+'"  style="position:absolute;top:0;left:'+(w+100)+'px; width:'+w+'px; "></div>';
					var inicio=0,fin=-w-100; 
					fx(primero,[
						{'inicio':inicio,'fin':fin,'u':'px','propCSS':'left'}
						],500,true,senoidal
					);
			
				
				}else{
					primero.innerHTML='<div id="'+idtemp+'" style="position:absolute;top:0;left:0; width:'+w+'px; "></div><div   style="position:absolute;top:0;left:'+(w+100)+'px; width:'+w+'px;" >'+content+'</div>';
					var inicio=(-w-100),fin=0; 
					fx(primero,[
						{'inicio':inicio,'fin':fin,'u':'px','propCSS':'left'}
						],500,true,senoidal
					);
			
			
				}
				_(idtemp).innerHTML=r.tratarResponseText();
				var h2=_(idtemp).offsetHeight || 0;	
				primero.style.height=h2+'px';
				primero.custom=r;
				document.body.style.overflowX=document.documentElement.style.overflowX='hidden';
				document.body.style.height=document.documentElement.style.height='100%';
				
		  },
		  {}
	);
	
	
}