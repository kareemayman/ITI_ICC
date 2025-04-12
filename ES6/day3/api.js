export async function fetchUsrs() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!data.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await data.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}