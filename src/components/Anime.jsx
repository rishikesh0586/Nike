import { useState } from 'react';
import { Transition } from '@headlessui/react';

const AnimatedImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative w-full h-full">
      <Transition
        show={isVisible}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-30"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-30"
      >
        <img
          src="https://img.wallpapersafari.com/desktop/1280/1024/10/87/m43buA.jpg"
          alt="Animated Image"
          className="w-full h-auto"
        />
      </Transition>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Animation
      </button>
    </div>
  );
};

export default AnimatedImage;
