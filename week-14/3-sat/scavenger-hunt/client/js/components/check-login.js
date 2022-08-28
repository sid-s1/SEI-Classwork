const checkLogin = () => {
    axios.get('/api/session')
        .then((response) => {
            if ('username' in response.data) {
                renderUserHeader();
            }
            else {
                renderHeader();
            }
        })
};