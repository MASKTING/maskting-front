import axios from 'axios';

axios
	.get('https://localhost:3000/login/user')
	.then(Response => {
		console.log(Response.data);
	})
	.catch(Error => {
		console.log(Error);
	});
