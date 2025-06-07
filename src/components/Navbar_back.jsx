import { Link } from 'react-router-dom';
import { exit } from '../assets';
import { styles } from '../styles';

const Navbar_back = () => {

  return (
    <>
      <nav
         className= {`${styles.paddingX} bg-black w-full flex items-center fixed py-5 top-0 z-20`}
      >
        <div className="w-full flex justify-between items-center gap-10 max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={exit} alt="logo" className="w-9 h-9 object-contain rounded-md bg-white p-1" />
            <p className="text-white-500  text-[20px] font-bold cursor-pointer flex">
              Back to Home
            </p>
          </Link>

        </div>
      </nav>
    </>
  );
};

export default Navbar_back;
