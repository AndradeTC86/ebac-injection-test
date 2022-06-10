describe('User Login', () => {
    it('SQL Injection', async () => {
        await req(API_URL)
        .post('/sql/login')
        .send({
            "email": "test@meuemail.com.br",
            "password": "' or 1=1 --"
        })
        .set("Accept", "application/json")
        .then(response =>{
            expect(response.statusCode).toEqual(422)
        })
    });
});

