var url = window.location.href,
	  phones = document.getElementsByClassName('ct_phone'),
	  button = document.getElementById('telephone'); //захватываем кнопку звонка

	if(~url.indexOf("clid")){ //определяем что пользователь с директа и адвордс
		var date = new Date;
		date.setDate(date.getDate() + 10);
		document.cookie = "source=yaDirect;expires="+ date.toUTCString()+ ";path=/;"; //отправляем куку
	}
	if(getCookie('source') == 'yaDirect'){ // Если есть кука - меняем номер
		button.setAttribute('href','tel:+74957683110');
		phones[0].innerHTML = '<a href="tel:+74957683110">+7 (495) 768-31-10</a>';
		phones[1].innerHTML = '<a href="tel:+74957683110">+7 (495) 768-31-10</a>';
	}

	function getCookie(name) {
		var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
