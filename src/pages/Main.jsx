import { AppShell, Footer, Group, Header, useMantineTheme } from "@mantine/core";
import Contact from "../components/Contact";
import AppHeader from "../components/AppHeader";
import PrincipalPanel from "./PrincipalPanel";
// import { useState } from "react";

const Main = () => {
  const theme = useMantineTheme();
  // const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      // navbar={
      //   <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      //     <Text>Application navbar</Text>
      //   </Navbar>
      // }
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //       <Text>Application sidebar</Text>
      //     </Aside>
      //   </MediaQuery>
      // }
      footer={
        <Footer height={40}>
          <Group align="center" h={"100%"} px={"xs"}>
            <Contact />
          </Group>
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }}>
          {/* <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div> */}
          <AppHeader />
        </Header>
      }
    >
      <PrincipalPanel/>
    </AppShell>
  );
};

export default Main;
