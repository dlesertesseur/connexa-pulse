import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  Button,
  Alert,
  Stack,
  useMantineTheme,
  Image,
  Text,
  Center,
} from "@mantine/core";
import Logo from "../Logo";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { useForm } from "@mantine/form";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { IconAlertCircle } from "@tabler/icons-react";
import { AppStateContext } from "../../context/AppStateContext";
import { config } from "../../config/config";
import { signIn } from "../../data/Auth";

export function SignIn() {
  const { t } = useTranslation();
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const { setUser, token, setToken, error } = useContext(AppStateContext);
  const [loading, setLoading] = useState(false);

  const authenticate = async (values) => {
    setLoading(true);
    const ret = await signIn(values);
    setUser(ret.user);
    setToken(ret.token);
    setLoading(false);
  };

  useEffect(() => {
    if (token) {
      navigate("/menu");
    }
  }, [navigate, token]);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    // CANBIAR LA VALIDACION DE LA CLAVE a minimo 6 caracteres
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : t("validation.emailFormat")),
      password: (val) => (val.length <= 2 ? t("validation.passwordFormat") : null),
    },
  });

  return (
    <Center w={"100vh"} h={"100vh"}>
      <Stack m={"xl"} p={"xl"} align="center">
        <Paper sx={{ width: 400 }} withBorder p={30} radius="md" bg={theme.colors.gray[0]}>
          <Logo width={120} />
          <form
            onSubmit={form.onSubmit((values) => {
              authenticate(values);
            })}
          >
            <TextInput
              label={t("label.email")}
              placeholder={t("placeholder.email")}
              onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
              error={form.errors.email}
              disabled={loading}
            />
            <PasswordInput
              label={t("label.password")}
              placeholder={t("placeholder.password")}
              autoComplete="off"
              mt="md"
              onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
              error={form.errors.password}
              disabled={loading}
            />

            {/* <Group position="apart" mt="md" >
              <Checkbox label={t("label.keepMeConnected")} disabled={loading}/>
            </Group> */}

            <Button type="submit" fullWidth mt="xl" loading={loading} loaderPosition={"left"}>
              {t("button.signIn")}
            </Button>
          </form>
          {error ? (
            <Alert
              mt={"sm"}
              icon={<IconAlertCircle size={16} />}
              title={t("errors.title")}
              color="red"
              variant="filled"
            >
              {error.message}
            </Alert>
          ) : null}

          <Group grow mt={"xl"}>
            <LanguageSelector disabled={loading}/>
          </Group>
        </Paper>

        <Group position="apart">
          <Image
            src={config.PUBLIC_URL + "/logos/zeetrex.png"}
            alt="logo"
            width={100}
            component="a"
            href={t("label.url")}
            target="_blank"
          />
          <Text size={"xs"} weight={500} color="gray">
            {t("label.copyright")}
          </Text>
        </Group>
      </Stack>
    </Center>
  );
}
