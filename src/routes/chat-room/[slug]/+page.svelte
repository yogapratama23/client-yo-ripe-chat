<script>
    import ChatRoom from '$lib/components/ChatRoom.svelte';
    import { io } from '$lib/webSocketConnection';
    import { onMount } from 'svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    const user = data.user;
    const chatRoom = data.chatRoom;

    let currentMessages = [];
    let currentMembers = [];

    onMount(() => {
        io.emit('join-chatroom', { chatRoom: chatRoom, user: user }, (resp) => {
            currentMembers = [...resp.data.members];
            currentMessages = [...currentMessages, ...resp.data.messages];
        });

        io.on(`${chatRoom._id}-newMessage`, (message) => {
            currentMessages = [...currentMessages, message];
        });

        io.on(`${chatRoom._id}-newMember`, (member) => {
            currentMembers = [...currentMembers, member];
        });

        io.on(`${data.chatRoom._id}-leaveChatRoom`, (member) => {
            currentMembers = [...currentMembers.filter(o => o._id !== member._id )];
        });
    });
</script>

<ChatRoom chatRoom={chatRoom} user={user} currentMembers={currentMembers} currentMessages={currentMessages} />