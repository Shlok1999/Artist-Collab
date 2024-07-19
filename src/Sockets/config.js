// src/Sockets/useSocket.js
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const useSocket = (roomName) => {
    const [socket, setSocket] = useState(null);
    const [documentContent, setDocumentContent] = useState("");

    useEffect(() => {
        const newSocket = io('http://localhost:3100');
        setSocket(newSocket);

        newSocket.emit('join room', roomName);

        newSocket.on('update document', (content) => {
            setDocumentContent(content);
        });

        return () => {
            newSocket.emit('leave room', roomName);
            newSocket.close();
        };
    }, [roomName]);

    const sendDocumentUpdate = (content) => {
        if (socket) {
            socket.emit('edit document', roomName, content);
        }
    };

    return { documentContent, sendDocumentUpdate };
};

export default useSocket;
