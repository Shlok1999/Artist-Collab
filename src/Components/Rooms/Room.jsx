import React, { useState } from 'react';
import '../../Styles/Room.css';

function Room() {
  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");

  const [joinRoomModal, setJoinRoomModal] = useState(false);
  const [createRoomModal, setCreateRoomModal] = useState(false);

  const handleJoinRoomSubmit = (e) => {
    e.preventDefault();
    console.log('Joining room:', roomName);
    setJoinRoomModal(false);
  };

  const handleCreateRoomSubmit = (e) => {
    e.preventDefault();
    console.log('Creating room with name:', name);
    setCreateRoomModal(false);
  };

  return (
    <div className='room'>
      <div className="join-room">
        <button onClick={() => setJoinRoomModal(true)}>Join Room</button>
      </div>
      <div className="create-room">
        <button onClick={() => setCreateRoomModal(true)}>Create Room</button>
      </div>

      {joinRoomModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Join Room</h2>
            <form onSubmit={handleJoinRoomSubmit}>
              <input 
                type="text" 
                placeholder="Room Name" 
                value={roomName} 
                onChange={(e) => setRoomName(e.target.value)} 
              />
              <button type="submit">Join</button>
            </form>
            <button className="close" onClick={() => setJoinRoomModal(false)}>Close</button>
          </div>
        </div>
      )}

      {createRoomModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create Room</h2>
            <form onSubmit={handleCreateRoomSubmit}>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
              <button type="submit">Create</button>
            </form>
            <button className="close" onClick={() => setCreateRoomModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Room;
