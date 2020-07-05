function id(e){return document.getElementById(e);}

function init(){
	//инициализация сегментов
    window.routes=[];
    rdata=document.getElementsByClassName("hidden");
    for (i=0;i<rdata.length;i++)
    routes.push([rdata[i].getAttribute("data-from"),rdata[i].getAttribute("data-to"),parseInt(rdata[i].getAttribute("data-price")),parsecur(rdata[i].innerHTML)]);

    rl=routes.length;
    for (i=0;i<rl;i++) routes.push([routes[i][1],routes[i][0],routes[i][2],routes[i][3]]);
}

function make()
{
	var a=id("from").value;
	var b=id("to").value;
	var thisroutes=routes.route(a,b);
	var bestroute=thisroutes.best();
	
    id("result1").innerHTML=bestroute[0].write();
    id("result2").innerHTML=bestroute[1].write();
    id("result3").innerHTML=bestroute[2].write();


}

function next(){
	//переключает варианты
	if (id("result1").style.display!="none"){
		id("result1").style.display="none";
		id("result2").style.display="block";
		id("result3").style.display="none";
		return;
	};
	if (id("result2").style.display!="none"){
		id("result1").style.display="none";
		id("result2").style.display="none";
		id("result3").style.display="block";
		return;
	};
	if (id("result3").style.display!="none"){
		id("result1").style.display="block";
		id("result2").style.display="none";
		id("result3").style.display="none";
		return;
	};
	
}

function parsecur(inp){
	//меняем цены на рубли
	var part="";
	var num=0; var cur="";
	while (inp.indexOf("{")!=-1){
		part=inp.split("{")[1];
		part=part.split("}")[0];
		num=parseInt(part.split(" ")[0]);
		cur=part.split(" ")[1];
		inp=inp.replace("{"+part+"}",money(num,cur));
		if (part.split(" ").length!=2) break;
	}
	return inp;
}

function city(inp)
{
	var r="Ошибка";
	var cities=document.getElementsByTagName("option");
	for (i=0;i<cities.length;i++)
	{
		if (cities[i].value==inp) r=cities[i].innerHTML;
	}
	return r;
}


Array.prototype.route=function(a,b){
	var res=[];
	
	for (i=0;i<this.length;i++)
	{
		if ((this[i][0]==a) && (this[i][1]==b)) {res.push([this[i][2],1,this[i]]);}
		//break;
		//если нашли прямой, добавляем его
		
		if (this[i][0]==a)
		{
			for (j=0;j<this.length;j++)
			{
				if ((this[i][1]==this[j][0]) && (this[j][1]==b)) {res.push([this[i][2]+this[j][2],2,this[i],this[j]]);}
				//нашли с 1 пересадкой
				for (k=0;k<this.length;k++)
				{
					if ((this[i][1]==this[j][0]) && (this[j][1]==this[k][0]) && (this[k][1]==b)) {res.push([this[i][2]+this[j][2]+this[k][2],3,this[i],this[j],this[k]]);}
					//нашли с 2 пересадками
				}
			}
		}
	}
	return res;
	};

Array.prototype.best=function(){
	//поиск самого дешевого варианта
	var min=1000000;
	var one=[],two=[], three=[];
	for (i=0;i<this.length;i++)
	{
		if (this[i][0]<min) {one=this[i]; min=this[i][0];}
	}//нашли первый
	
	min=1000000;
	for (i=0;i<this.length;i++)
	{
		if ((this[i][0]<min) && (this[i]!=one)) {two=this[i]; min=this[i][0];}
	}//нашли второй
	
	min=1000000;
	for (i=0;i<this.length;i++)
	{
		if ((this[i][0]<min) && (this[i]!=one) && (this[i]!=two)) {three=this[i]; min=this[i][0];}
	}//нашли третий
	
	return [one,two,three];
};

Array.prototype.write=function(){
	//формируем текст на основе массива с маршрутом
	var text="";
	
	
	switch (this[1])
	{
		case 1:
		text+="Найден прямой маршрут между <b>"+this[2][0].city()+"</b> и <b>"+this[2][1].city()+"</b>.<br/>";
		text+=this[2][3];
		break;
		case 2:
		text+="Найден маршрут между <b>"+this[2][0].city()+"</b> и <b>"+this[3][1].city()+"</b> через <i>"+this[3][0].city()+"</i>.<br/>";
		text+="<u>"+this[2][0].city()+" - "+this[3][0].city()+"</u>:<br/>"+this[2][3]+"<br/>";
		text+="<u>"+this[3][0].city()+" - "+this[3][1].city()+"</u>:<br/>"+this[3][3];
		break;
		case 3:
		text+="Найден маршрут между <b>"+this[2][0].city()+"</b> и <b>"+this[4][1].city()+"</b> через <i>"+this[3][0].city()+"</i> и <i>"+this[3][1].city()+"</i>.<br/><br/>";
		text+="<u>"+this[2][0].city()+" - "+this[3][0].city()+"</u>:<br/>"+this[2][3]+"<br/>";
		text+="<u>"+this[3][0].city()+" - "+this[3][1].city()+"</u>:<br/>"+this[3][3]+"<br/>";
		text+="<u>"+this[3][1].city()+" - "+this[4][1].city()+"</u>:<br/>"+this[4][3];
		break;
		default:
		text+="<br/>Не удалось построить маршрут.";
	}
	return text;
};
String.prototype.city=function(){
	//название города по его коду
	var r="Ошибка";
	var cities=document.getElementsByTagName("option");
	for (i=0;i<cities.length;i++)
	{
		if (cities[i].value==this) r=cities[i].innerHTML;
	}
	return r;
};
