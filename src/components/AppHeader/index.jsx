import { Group, Image, useMantineTheme } from "@mantine/core";
import { config } from "../../config/config";
import { useMediaQuery } from "@mantine/hooks";
import UserMenu from "../UserInfo/UserMenu";

const AppHeader = () => {
  const theme = useMantineTheme();
  const matchesMinMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  
  return (
    <Group w={"100%"} h={"100%"} position="apart" p={"xs"}>
      <Group>
        <Image src={config.PUBLIC_URL + "/logos/logo.png"} alt="image" width={matchesMinMd ? 60 : 40} />
      </Group>
      <UserMenu />
    </Group>
  );
};

export default AppHeader;
