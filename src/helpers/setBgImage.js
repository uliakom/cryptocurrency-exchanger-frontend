export const setBgImage = ({ role }) => {
  const userAvatarBg = `radial-gradient(80.64% 81.95% at 30.28% 75.13%, #93696F 0%, #3E45C3 100%)`;
  const adminAvatarBg = `radial-gradient(circle at bottom left, #a1812e 20%, #cfad56 60%, #f4de8b 80%)`;
  return role === 'admin' ? adminAvatarBg : userAvatarBg;
};
