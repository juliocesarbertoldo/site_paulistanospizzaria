function carregar() {
  let ip_sistema = window.document.getElementById('ip-sistema')
        fetch('https://api.ipify.org?format=json')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					if (data.ip == '143.137.43.12') {
                        ip_sistema.src = 'http://127.0.0.1/mmrest/autocliente/'
                    }
				});
}

document.onload = carregar()