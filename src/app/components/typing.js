'use client';
import { useEffect, useRef } from 'react';
import { Text } from '@chakra-ui/react';

const TypewriterEffect = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const TextElement = textRef.current;
    const items = TextElement.getAttribute('data-typed-items').split(',').map(item => item.trim());

    let currentItem = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
      const fullText = items[currentItem];
      currentText = isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1);
      TextElement.textContent = currentText;

      let typeSpeed = 50; // Adjust the typing speed as needed

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000; // Pause after typing the full text
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentItem = (currentItem + 1) % items.length;
      }

      setTimeout(type, typeSpeed);
    }

    type();
  }, []);

  return (
    <Text 
      ref={textRef}
      data-typed-items="ecommerce" 
      color={'orange'} 
      fontWeight={'bold'} 
      fontSize={['40px', '40px', '80px', '80px']}
    >
    </Text>
  );
};

export default TypewriterEffect;
