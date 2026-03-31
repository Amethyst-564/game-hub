import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const platform = usePlatform(selectedPlatformId)

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        <MenuItem key={0} onClick={() => setSelectedPlatformId(undefined)}>All</MenuItem>
        {data?.results.map(platform => <MenuItem key={platform.id} onClick={() => setSelectedPlatformId(platform.id)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector