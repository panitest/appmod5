function getWindowData(){
	var widthViewport,heightViewport,xScroll,yScroll,widthTotal,heightTotal;
	if (typeof window.innerWidth != 'undefined'){
    	widthViewport= window.innerWidth-17;
        heightViewport= window.innerHeight-17;
	}else if(typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth !='undefined' && document.documentElement.clientWidth != 0){
        widthViewport=document.documentElement.clientWidth;
        heightViewport=document.documentElement.clientHeight;
	}else{
		widthViewport= document.getElementsByTagName('body')[0].clientWidth;
        heightViewport=document.getElementsByTagName('body')[0].clientHeight;
	}
	xScroll=self.pageXOffset || (document.documentElement.scrollLeft+document.body.scrollLeft);
	yScroll=self.pageYOffset || (document.documentElement.scrollTop+document.body.scrollTop);
	widthTotal=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth,widthViewport);
	heightTotal=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight,heightViewport);
	return [widthViewport,heightViewport,xScroll,yScroll,widthTotal,heightTotal];
}

function ir(id){
	
	if(!_(id))return;
	var scrollY=self.pageYOffset || (document.body.scrollTop+document.documentElement.scrollTop);
	var pos=getElementPosition.call(_(id));
	var inicio=scrollY,fin=pos.top; 
    var t=new Transition(SineCurve,500,function(p){ 
        scrollTo(0,inicio+((fin-inicio)*p)); 
    }); 
    t.run(); 
    t=null; 
}

ns.mojones=[];
onscroll=function(){
	ns.h=ns.h || getWindowData();
	if(ns.mojones.length<ns.zonas.length){
		for(var i=0,l=ns.zonas.length;i<l;i++){
			ns.mojones.push(getElementPosition.call(_(ns.zonas[i])));
		}
	}
	var scrollY=self.pageYOffset || (document.body.scrollTop+document.documentElement.scrollTop);
	for(i=0,l=ns.mojones.length;i<l;i++){
		if(scrollY>=ns.mojones[i].top){
			(function(i){
				_('navflecha').onclick=function(){
					if(ns.zonas[i+1]){
						//alert(ns.zonas[i+1]);
						ir(ns.zonas[i+1]);
					}
				}
			})(i);
		}
		
	}
	if(scrollY>=ns.mojones[ns.mojones.length-1].top){
		if(_('navflecha'))
			_('navflecha').style.visibility='hidden';
			if(_('navflechaup') && ns.mojones.length>1){
				_('navflechaup').style.display='block';
			}
	}else{
		if(_('navflecha'))
		_('navflecha').style.visibility='visible';
		if(_('navflechaup')){
				_('navflechaup').style.display='none';
			}
	}
}
DR(onscroll);