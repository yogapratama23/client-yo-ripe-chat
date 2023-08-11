/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, params }) {
    let user;
    let chatRoom;

    const userId = cookies.get('user_id');

    if (userId) {
        const apiUser = await fetch(`${import.meta.env.VITE_BASE_URL}/user/${userId}`);
        const respUser = await apiUser.json();

        user = respUser.data;
    }

    const apiChatRoom = await fetch(`${import.meta.env.VITE_BASE_URL}/chat/${params.slug}`);
    const respChatRoom = await apiChatRoom.json();
    chatRoom = respChatRoom.data;

    return {
        user, chatRoom
    };
}
