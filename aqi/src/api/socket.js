import React from 'react';

import { io } from 'socket.io-client';
import { APP } from '../config/app.config';

export const socket = io(APP.SOCKET_SERVER_URL, {
  transports: ['websocket'],
});
export const SocketContext = React.createContext();
