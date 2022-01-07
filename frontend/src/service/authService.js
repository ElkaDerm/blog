

export async function login(username, password) {
    if (!username || !password) {
        throw new Error('missing username or password')
    }
}