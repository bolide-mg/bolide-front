import {encodeToBase64} from "next/dist/build/webpack/loaders/utils";

export const authProvider = {
    login: ({ username, password } : { username: string, password: string }) => {
        const request = new Request('http://localhost:8080/admin/token', {
            method: 'POST',
            headers: new Headers({
                Authorization: `Basic ${encodeToBase64(`${username}:${password}`)}`,
            })
        });
        const result = fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                const result = response.json();
                console.log(result);
                return result;
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
            })
            .catch(e => {
                console.error(e);
                throw new Error('Network error')
            });
        localStorage.setItem('username', username);
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem('username');
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
    checkError:  (error: any) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: 'John Doe',
        }),
    getPermissions: () => Promise.resolve(''),
};

export default authProvider;