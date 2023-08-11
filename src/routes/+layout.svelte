<script>
    import Nav from '$lib/components/Nav.svelte';
    import '../app.css';
</script>

<div class="w-full min-h-screen text-white">
    <div class="w-full h-[5vh] bg-slate-900">
        <Nav />
    </div>
    <div class="w-full h-[90vh] bg-slate-700">
        <slot />
    </div>
    <div class="w-full h-[5vh] bg-slate-900">
        FOOTER
    </div>
</div>
