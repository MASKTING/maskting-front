import axios from 'axios';

axios
	.get('http://ec2-43-200-206-130.ap-northeast-2.compute.amazonaws.com:8080')
	.then(Response => {
		console.log(Response.data);
	})
	.catch(Error => {
		console.log(Error);
	});
