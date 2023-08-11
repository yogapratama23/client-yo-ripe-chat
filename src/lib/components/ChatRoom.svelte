<script>
    import ChatRoomBubble from "./ChatRoomBubble.svelte";
    import ChatRoomHead from "./ChatRoomHead.svelte";
    import ChatRoomInput from "./ChatRoomInput.svelte";

    export let chatRoom;
    export let user;
    export let currentMembers;
    export let currentMessages;
</script>
<div class="max-w-full h-full bg-slate-800 mx-64 flex">
    <div class="w-1/3 bg-slate-100 mx-auto my-10 text-slate-900 flex flex-col">
        <ChatRoomHead chatRoom={chatRoom} currentMembers={currentMembers} user={user} />
        <ChatRoomBubble user={user} currentMessages={currentMessages}/>
        <ChatRoomInput chatRoom={chatRoom} user={user}/>
    </div>
</div>