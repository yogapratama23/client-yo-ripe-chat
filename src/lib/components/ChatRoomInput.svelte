<script>
    import { io } from '$lib/webSocketConnection';

    export let chatRoom;
    export let user;
    let typedMessage = '';
    
    function handleSendMessage() {
        const messageObj = {
            message: typedMessage,
            sender: user
        };
        io.emit('send-message', {
            chatRoom: chatRoom,
            message: messageObj
        }, (resp) => {
            typedMessage = '';
        });
    }
</script>

<div class="h-[8vh] w-full flex">
    <form class="w-full h-full" on:submit={handleSendMessage}>
        <label class="bg-amber-500 h-full flex justify-center items-center px-3 gap-4">
            <input bind:value={typedMessage} type="text" name="message" class="w-3/4 rounded-lg indent-3 text-sm" placeholder="Type your message here..." autocomplete="off">
            <button type="submit" class="w-1/4 bg-slate-500 rounded-xl text-white font-mono font font-semibold hover:bg-slate-600 hover:text-amber-200">Send!</button>
        </label>
    </form>
</div>