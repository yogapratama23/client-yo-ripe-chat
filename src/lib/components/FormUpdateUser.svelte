<script>
    export let userId;
    export let username;

    let isEdit = false;
</script>

<div>
    {#if isEdit}
        <form action="?/updateUser" method="post" class="flex flex-col gap-4">
            <input type="text" name="userId" value={userId} hidden>
            <label class="flex flex-col gap-2 justify-center items-center">
                <span class="font-mono text-xs">Username</span>
                <input type="text" name="username" class="indent-2 rounded-lg text-black text-md" value={username}>
            </label>
            <button type="submit" class="bg-amber-700 rounded-lg text-sm hover:bg-amber-500 hover:text-amber-200">Update!</button>
        </form>
    {:else}
        <div class="flex gap-4 justify-center items-center">
            <div class="flex flex-col justify-center items-center gap-2">
                <span class="font-mono text-xs select-none">Username</span>
                <span class="bg-amber-900 px-24 rounded-lg select-none">{username}</span>
            </div>
            <button on:click={() => isEdit = !isEdit} class="font-mono text-xs bg-amber-700 rounded-lg hover:bg-amber-500 hover:text-amber-200 px-2 py-1 self-end">Edit!</button>
        </div>
    {/if}
</div>
