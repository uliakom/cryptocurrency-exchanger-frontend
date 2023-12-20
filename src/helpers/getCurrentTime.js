export const getCurrentTime = () => {
  const timeCreated = new Date().toLocaleTimeString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
  });
  return timeCreated;
};
