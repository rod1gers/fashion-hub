import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsMobile } from '../redux/slices/screenSizeSlice';

const useScreenSize = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const scrWidth = window.innerWidth;
      dispatch(setIsMobile(scrWidth <= 550));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);
};

export default useScreenSize;
