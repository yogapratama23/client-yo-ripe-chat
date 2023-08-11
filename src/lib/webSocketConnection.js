import ioClient from 'socket.io-client';
const ENDPOINT = `${import.meta.env.VITE_BASE_URL}`;

const socket = ioClient(ENDPOINT);

export const io = socket;
