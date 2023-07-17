import { Group, Image } from "@mantine/core";
import { config } from "../../config/config";
import UserMenu from "../UserInfo/UserMenu";

const AppHeader = () => {
  return (
    <Group w={"100%"} h={"100%"} position="apart" p={"xs"}>
      <Group>
        <Image src={config.PUBLIC_URL + "/logos/logo.png"} alt="image" width={60} />
        {/* <Divider orientation="vertical" />
        <OptionsMenu/> */}
      </Group>
      <UserMenu />
    </Group>
  );
};

export default AppHeader;
