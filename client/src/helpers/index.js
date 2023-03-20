const authHeader = () => {
    const accessToken = localStorage.getItem('_token');
    if (accessToken) {
        return {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        };
    } else {
        return {};
    }
};

export { authHeader };
