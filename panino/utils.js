function error(el,desde, hasta,t){
	if(desde[0]!=hasta[0] || desde[1]!=hasta[1] || desde[2]!=hasta[2]){
		desde[0]=(desde[0]+3)<hasta[0]?desde[0]+3:hasta[0];
		desde[1]=(desde[1]+3)<hasta[1]?desde[1]+3:hasta[1];
		desde[2]=(desde[2]+3)<hasta[2]?desde[2]+3:hasta[2];
		el.style.backgroundColor='rgb('+desde[0]+','+desde[1]+','+desde[2]+')';
		setTimeout(function(){error(el,desde, hasta,t)},30);
	}else{
		if(t){
			el.style.backgroundColor='transparent';
		}
	}
}
if(!String.prototype.trim){  
  String.prototype.trim = function(){  
    return this.replace(/^\s+|\s+$/g,'');  
  };  
}

function solonro(e) { // 1
	/*uso  onkeypress="return solonro(event)"*/
    tecla = e.keyCode || e.which; // 2
    if (tecla==8 || tecla==0 || tecla==9  || tecla==46) return true; // 3
    patron =/\d/; // Solo acepta n?meros
    te = String.fromCharCode(tecla); // 5
    return patron.test(te); // 6
}
function sololetra(e) { // 1
	/*uso  onkeypress="return sololetra(event)"*/
    tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8 || tecla==0 || tecla==9 || tecla==46) return true; // 3
    //if (tecla==32) return true; // espacio
    //if (e.ctrlKey && tecla==86) { return true;} //Ctrl v
    //if (e.ctrlKey && tecla==67) { return true;} //Ctrl c
    //if (e.ctrlKey && tecla==88) { return true;} //Ctrl x
 
    patron = /[a-zA-Z]/; //patron
 
    te = String.fromCharCode(tecla); 
    return patron.test(te); // prueba de patron
}
function caracteresRestantes(info,limite,campo){
	if(campo.value.length>limite){
		campo.value=campo.value.substr(0,limite);
	}
	info.innerHTML=(limite-parseInt(campo.value.length));
}

function ver(e,callback){ 
    var t=e.keyCode || e.wich; 
    if(t==13){ 
        callback();
        return false; 
    } 
    return true; 
}

function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
}