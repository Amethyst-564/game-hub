import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { FaAndroid, FaApple, FaAppStoreIos, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa6';

import type { IconType } from 'react-icons';
import type { Platform } from '../hooks/usePlatforms';

interface Props {
  platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    ios: FaAppStoreIos,
    android: FaAndroid,
    web: BsGlobe
  };

  return (
    <HStack marginY={1}>
      {platforms.map(platform => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />)}
    </HStack>
  )
}

export default PlatformIconList