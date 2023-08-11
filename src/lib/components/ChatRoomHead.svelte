<script>
    import users from '$lib/assets/users.svg';
    import { io } from '$lib/webSocketConnection';
    import { browser } from '$app/environment';

    export let chatRoom;
    export let currentMembers;
    export let user;

    let showParticipants = false;

    function handleShowParticipants() {
        showParticipants = !showParticipants;
    }

    function handleLeaveRoom() {
        io.emit('leave-chatroom', { chatRoom: chatRoom, user: user }, (resp) => {

        });

        io.disconnect();
        
        if (browser) {
            window.location.href = '/';
        }
    }
</script>

<div class="bg-amber-500 h-[5vh] font-mono font-semibold text-white flex justify-between items-center px-5">
    <div class="font-mono flex h-full flex-col justify-center items-center">
        <span class="text-[10px] text-slate-100 select-none">Host</span>
        <span class="text-sm select-none">{chatRoom.creator.username}</span>
    </div>
    <div class="flex flex-col justify-center items-center">
        <div class="text-slate-700 font-mono text-xs font-semibold select-none">Room Name</div>
        <div class="font-sans">{chatRoom.name}</div>
    </div>
    <div class="inline-block">
        <button on:click={handleShowParticipants} class="bg-slate-400 px-1 rounded-xl flex gap-1 text-xs py-1 items-center hover:bg-amber-600 hover:text-amber-200">
            <img src={users} alt="participants" class="w-5 h-5">
            <div>{currentMembers.length}</div>
        </button>
        {#if showParticipants}
            <div class="absolute origin-top-right bg-slate-900 px-2 mt-2 py-1 text-xs rounded-md">
                {#each currentMembers as member}
                    <div>{member.username}</div>
                {/each}
            </div>
        {/if}
    </div>
    <button on:click={handleLeaveRoom} class="text-xs bg-slate-500 p-2 rounded-xl hover:bg-slate-600 hover:text-amber-200">Leave</button>
</div>
