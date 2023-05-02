import React, { useState } from 'react';
import Typing from 'react-typing-effect';

const AnimatedText = ({ texts }) => {
  const [index, setIndex] = useState(0);

  const handleTypingComplete = () => {
    if (Array.isArray(texts) && index < texts.length - 1) {
      setIndex(index + 1);
    }
  };

  if (!Array.isArray(texts) || texts.length === 0) {
    return null;
  }

  return (
    <Typing onTypingDone={handleTypingComplete} startDelay={500}>
      {Array.isArray(texts) && texts.length > 0 ? texts[index] : ''}
    </Typing>
  );
};

export default AnimatedText;
