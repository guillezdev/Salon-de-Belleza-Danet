import React, { useState, useEffect } from 'react';

import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) {
    return null;
  }

  return (
    <button className="fixed bottom-4 right-4 bg-gray-800 text-pink-500 p-2 rounded-full shadow-md animate-bounce" onClick={handleClick}>
      <FaArrowUp />
    </button>
  );
};