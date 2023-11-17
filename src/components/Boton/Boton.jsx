// import React, { useState } from 'react';
// import { Box, Heading, useMediaQuery } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

// const ContadorResponsive = () => {
//   const [count, setCount] = useState(0);
//   const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const buttonVariants = {
//     hover: {
//       scale: 1.1,
//       backgroundColor: '#008080',
//       color: '#fff',
//     },
//   };

//   const headingVariants = {
//     animate: {
//       scale: [1, 1.5, 1],
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <Box p={4}>
      
//       <motion.div
//         variants={headingVariants}
//         animate="animate"
//         key={count} // Key prop for re-render animation
//       >
//         <Heading size="lg">{count}</Heading>
//       </motion.div>
//       <Box
//         display="flex"
//         flexDirection={isLargerThan600 ? 'row' : 'column'}
//         alignItems="center"
//         mt={4}
//       >
//         <motion.button
//           onClick={decrement}
//           mr={isLargerThan600 ? 2 : 0}
//           whileHover="hover"
//           variants={buttonVariants}
//         >
//           Decrementar
//         </motion.button>
//         <motion.button
//           onClick={increment}
//           ml={isLargerThan600 ? 2 : 0}
//           whileHover="hover"
//           variants={buttonVariants}
//         >
//           Incrementar
//         </motion.button>
//       </Box>
//     </Box>
//   );
// };

// export default ContadorResponsive;


import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const Boton = ({ texto, incrementar, manejarClick, style }) => {
  return (
    <Box textAlign="center" mt={4}>
      <Button
        colorScheme={incrementar ? 'teal' : 'red'}
        mt={2}
        onClick={manejarClick}
        style={style}
      >
        {texto}
      </Button>
    </Box>
  );
};

export default Boton;
