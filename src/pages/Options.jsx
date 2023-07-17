import { Container, Grid } from "@mantine/core";
import Option from "../components/OptionsMenu/Option";
import {
  IconBrandSpeedtest,
  IconGraph,
  IconLocationFilled,
  IconProgress,
  IconRoute2,
  IconTruckDelivery,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const Options = () => {
  const {t} = useTranslation();

  return (
    <Container size={"xl"}>
      <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
        <Grid.Col md={6} lg={4}>
          <Option
            title={t("options.option1.title")}
            text={t("options.option1.description")}
            icon={<IconLocationFilled />}
            h={100}
            link={"/main/option1"}
          />
        </Grid.Col>
        <Grid.Col  md={6} lg={4}>
          <Option 
            title={t("options.option2.title")}
            text={t("options.option2.description")}
          icon={<IconGraph />} h={100} />
        </Grid.Col>
        <Grid.Col  md={6} lg={4}>
          <Option
            title={t("options.option3.title")}
            text={t("options.option3.description")}
            icon={<IconTruckDelivery />}
            h={100}
          />
        </Grid.Col>
        <Grid.Col  md={6} lg={4}>
          <Option
            title={t("options.option4.title")}
            text={t("options.option4.description")}
            icon={<IconProgress />}
            h={100}
          />
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Option
            title={t("options.option5.title")}
            text={t("options.option5.description")}
            icon={<IconBrandSpeedtest />}
            h={100}
          />
        </Grid.Col>
        <Grid.Col  md={6} lg={4}>
          <Option
            title={t("options.option6.title")}
            text={t("options.option6.description")}
            icon={<IconRoute2 />}
            h={100}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Options;
