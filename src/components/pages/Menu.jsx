import { AppShell, Center, Container, Paper } from "@mantine/core";

const Menu = () => {
  return (
    <AppShell
    // padding="md"
    // navbar={
    //   <Navbar width={{ base: 300 }} height={500} p="xs">
    //     {/* Navbar content */}
    //   </Navbar>
    // }
    // header={
    //   <Header height={60} p="xs">
    //     {/* Header content */}
    //   </Header>
    // }
    // styles={(theme) => ({
    //   main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
    // })}
    >
      <Container>
        <Paper withBorder={true}>
          <Center>Menu</Center>
        </Paper>
      </Container>
    </AppShell>
  );
};

export default Menu;
