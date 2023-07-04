// Testing the Status code

const config = require('../config');

test('Should return status code 200', async () => {
	 let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

//Body should contain ok: true

test('Should return status code 200', async () => {
	let actualResponseBody;
   try {
	   const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
		   method: 'DELETE',
	   });
	   actualResponseBody = await response.json();
   } catch (error) {
	   console.error(error);
   }
   expect(actualResponseBody.ok).toBe(true);
});