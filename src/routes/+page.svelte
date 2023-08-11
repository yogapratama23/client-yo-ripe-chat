<script>
    import FormCreateChatRoom from "$lib/components/FormCreateChatRoom.svelte";
    import FormCreateUser from "$lib/components/FormCreateUser.svelte";
    import FormFindChatRoom from "$lib/components/FormFindChatRoom.svelte";
    import FormUpdateUser from "$lib/components/FormUpdateUser.svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    let openFindForm = false;
    let openCreateForm = false;

    function handleOpenFindForm() {
        openFindForm = !openFindForm;
        openCreateForm = false;
    }

    function handleOpenCreateForm() {
        openCreateForm = !openCreateForm;
        openFindForm = false;
    }
</script>
<div class="max-w-full h-full bg-slate-800 mx-64 flex flex-col justify-center items-center gap-4">
    {#if data.user}
        <FormUpdateUser userId={data.user._id} username={data.user.username} />
        <div class="flex gap-6">
            <button on:click={handleOpenFindForm} class="font-mono text-xs bg-amber-700 rounded-lg hover:bg-amber-500 hover:text-amber-200 px-4 self-end py-2">Find chat room</button>
            <button on:click={handleOpenCreateForm} class="font-mono text-xs bg-amber-700 rounded-lg hover:bg-amber-500 hover:text-amber-200 px-4 self-end py-2">Create chat room</button>
        </div>
        {#if openFindForm}
            <FormFindChatRoom />
        {/if}
        {#if openCreateForm}
            <FormCreateChatRoom />
        {/if}
    {:else}
        <FormCreateUser />
    {/if}
</div>
