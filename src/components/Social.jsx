import { HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import {FaFacebookF, FaGoogle, FaSpotify, FaShopify} from 'react-icons/fa';

const Social = () => {
    return (
        <HStack spacing="24">
            <Icon as={FaFacebookF} boxSize="30" />
            <Icon as={FaGoogle} boxSize="30" />
            <Icon as={FaSpotify} boxSize="30" />
            <Icon as={FaShopify} boxSize="30" />
        </HStack>
    );
};

export default Social;