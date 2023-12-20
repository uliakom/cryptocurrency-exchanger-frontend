import instance from 'shared/api/auth';
export const chatHost = 'https://crypto-ag2e.onrender.com';

export const allUsersRoute = `/users/all`;
export const sendMessageRoute = `/api/chat/addmsg`;
export const recieveMessageRoute = `/api/chat/getmsg`;

export const getAllUsers = async () => {
  try {
    // const data = await instance.get(`${allUsersRoute}/${currentUser._id}`);
    const response = await instance.get(`${allUsersRoute}?limit=40`);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const handleMsgReceived = async (userId, currentChatId) => {
  try {
    const response = await instance.post(recieveMessageRoute, {
      from: userId,
      to: currentChatId,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
