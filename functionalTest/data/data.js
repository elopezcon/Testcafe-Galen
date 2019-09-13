class DataProvider {
    constructor(){
        this.userData = [
            {
                user: 'test',
                password: 'test123'
            },
            {
                user: 'testssadauser@example.com',
                password: 'test123'
            },
            {
                user: 'tesst',
                password: 'test12s3'
            },
            {
                user: 'test',
                password: ''
            },
            {
                user: '',
                password: 'test123'
            },
            {
                user: '',
                password: ''
            }

        ]
    }
}

export default new DataProvider()