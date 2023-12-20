import loader from 'images/loader.gif';

const Loader = () => {
  return (
    <div style={{ backgroundColor: 'transparent', width: '100%', height: '100%' }}>
      <img
        src={loader}
        style={{ minWidth: '200px', maxWidth: '30%', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  );
};

export default Loader;
