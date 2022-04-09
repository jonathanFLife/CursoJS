function getTime(){
	var data = new Date();
	var day = "0"+data.getDate();
	var mes = "0"+(data.getMonth()+1);
	var ano = data.getFullYear();
	var hora = "0"+data.getHours();
	var minutos = "0"+data.getMinutes();
	var segundos = "0"+data.getSeconds();
	return day.substr(-2) + "/" + mes.substr(-2) + "/" + ano + " - " + hora.substr(-2) + ":" + minutos.substr(-2) + ":" + segundos.substr(-2);
}
// código tirado do bot do  allien para hora