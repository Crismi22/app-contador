import React, { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

const ContadorResponsive = ({ numClicks }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.5,
      },
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start('animate');
  }, [numClicks, controls]);

  return (
    <Box
      className='contadorResponsive'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      textAlign='center'
    >
      <motion.div
        variants={textVariants}
        animate={controls}
        key={numClicks}
        display='inline-block'
      >
        <Text fontSize='50px' color='#fff'>
          {numClicks}
        </Text>
      </motion.div>
    </Box>
  );
};

export default ContadorResponsive;
