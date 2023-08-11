import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    let user;
    const userId = cookies.get('user_id');

    if (userId) {
        const api = await fetch(`${import.meta.env.VITE_BASE_URL}/user/${userId}`);
        const resp = await api.json();

        user = resp.data;
    }

    return {
        user,
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    createUser: async ({ cookies, request }) => {
        const formData = await request.formData();
        const username = formData.get('username');

        const api = await fetch(`${import.meta.env.VITE_BASE_URL}/user`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username: username
            })
        });
        const resp = await api.json();

        cookies.set('user_id', resp.data._id);

        throw redirect(301, '/');
    },
    updateUser: async ({ request }) => {
        const formData = await request.formData();
        const userId = formData.get('userId');
        const username = formData.get('username');

        await fetch(`${import.meta.env.VITE_BASE_URL}/user/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username: username
            })
        });

        throw redirect(302, '/');
    },
    createChatRoom: async ({ cookies, request }) => {
        let user;
        const userId = cookies.get('user_id');

        const apiUser = await fetch(`${import.meta.env.VITE_BASE_URL}/user/${userId}`);
        const respUser = await apiUser.json();
        user = respUser.data;

        const formData = await request.formData();
        const chatRoomObj = {
            name: formData.get('name'),
            creator: user
        }
        
        const apiChat = await fetch(`${import.meta.env.VITE_BASE_URL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(chatRoomObj)
        });

        const respChat = await apiChat.json();

        throw redirect(302, `/chat-room/${respChat.data.name}`);
    },
    findChatRoom: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        
        const api = await fetch(`${import.meta.env.VITE_BASE_URL}/chat/${name}`)
        const resp = await api.json();

        throw redirect(302, `/chat-room/${resp.data.name}`);
    }
}
