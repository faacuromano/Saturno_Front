
export function login(email, password) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email == 'user' && password === '123456') {
                resolve();
            } else {
                reject('Usuario incorrecto');
            }
        }, Math.round(Math.random() * 1000));
    });
}

