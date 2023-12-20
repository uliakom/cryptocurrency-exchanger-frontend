import { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { StyledForm, SBtnWrap, InputWrap } from './ChatInput.styled';

const ChatInput = ({ handleSendMsg, disabled }) => {
  const [msg, setMsg] = useState('');

  const sendChat = event => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg('');
    }
  };
  return (
    <div>
      <StyledForm onSubmit={event => sendChat(event)}>
        <InputWrap>
          <input
            type="text"
            placeholder="type your message here"
            onChange={e => setMsg(e.target.value)}
            value={msg}
          />
        </InputWrap>
        <SBtnWrap>
          <button type="submit" isDisabled={disabled}>
            <IoMdSend
              size={40}
              style={{
                color: '#3e45c3',
              }}
            />
          </button>
        </SBtnWrap>
      </StyledForm>
    </div>
  );
};

export default ChatInput;
