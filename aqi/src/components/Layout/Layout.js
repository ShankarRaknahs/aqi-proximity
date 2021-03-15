import Appbar from '../Appbar/Appbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Appbar />
      {children}
    </div>
  );
};

export default Layout;
