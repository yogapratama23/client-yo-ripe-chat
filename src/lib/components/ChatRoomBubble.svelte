<script>
    export let user;
    export let currentMessages;
</script>

<div class="h-[90vh] bg-slate-300 px-4 flex flex-col gap-2 py-3 overflow-x-auto">
    {#each currentMessages as message}
        {#if message.sender.username === user.username}
            <div class="w-fit px-4 flex flex-col gap-1 self-end">
                <div class="font-mono font-semibold text-xs">you</div>
                <div class="text-sm bg-blue-200 px-4 rounded-lg">{message.message}</div>
            </div>
        {:else}
            <div class="w-fit px-4 flex flex-col gap-1">
                <div class="font-mono font-semibold text-xs">{message.sender.username}</div>
                <div class="text-sm bg-white px-4 rounded-lg">{message.message}</div>
            </div>
        {/if}
    {/each}
</div>