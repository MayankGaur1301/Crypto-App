import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react';

const Error = ({message}) => {
    return (
       <Alert position={'fixed'} left={'25%'} top={'50%'} w={'50%'} >
        <AlertIcon  />
        {message}
       </Alert>
    );
};

export default Error;