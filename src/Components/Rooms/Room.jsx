import React, { useState } from 'react';
import useSocket from '../../Sockets/config';
import { useAuth } from '../utils/AuthContext';
import '../../Styles/Room.css';
import { useNavigate } from 'react-router-dom';

function Room() {
  const {user} = useAuth();
  const [name, setName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [joinRoomModal, setJoinRoomModal] = useState(false);
  const [createRoomModal, setCreateRoomModal] = useState(false);
  const { messages, sendMessage } = useSocket();
  const navigate = useNavigate();

  const handleJoinRoomSubmit = (e) => {
    e.preventDefault();
    console.log('Joining room:', roomName);
    navigate(`/document/${roomName}`)
    setJoinRoomModal(false);
  };

  const handleCreateRoomSubmit = (e) => {
    e.preventDefault();
    console.log('Creating room with name:', roomName);
    navigate(`/document/${roomName}`)
    setCreateRoomModal(false);
  };


  return (
    <div className='room'>
      <div className='join-room'>
        <button onClick={() => setJoinRoomModal(true)}>Join Room</button>
      </div>
      <div className='create-room'>
        <button onClick={() => setCreateRoomModal(true)}>Create Room</button>
      </div>

      {joinRoomModal && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Join Room</h2>
            <form onSubmit={handleJoinRoomSubmit}>
              <input
                type='text'
                placeholder='Room Name'
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
              <button type='submit'>Join</button>
            </form>
            <button className='close' onClick={() => setJoinRoomModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {createRoomModal && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Create Room</h2>
            <form onSubmit={handleCreateRoomSubmit}>
              <input
                type='text'
                placeholder='Your Name'
                value={user.name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='text'
                placeholder='Room Name'
                value={roomName}
                onChange={(e)=>setRoomName(e.target.value)}
              />
              <button type='submit'>Create</button>
            </form>
            <button className='close' onClick={() => setCreateRoomModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div>
      </div>
    </div>
  );
}

export default Room;
