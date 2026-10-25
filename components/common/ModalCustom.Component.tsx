import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Group,
  Modal,
  Paper,
  ScrollArea,
  Stack,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";
import { ReactElement } from "react";

export interface TitleHead {
  title: string;
  aditionalChild?: ReactElement | null;
}

export default function ModalCustomComponent({
  children,
  titleHead = {
    title: "",
  },
  opened = false,
  handlerClose = () => {},
  handleConfirm = () => {},
  ConfirmText = "Aceptar",
  Canceltext = "Cancelar",
  isConfirmModal = false,
  isModalMedium = false,
  showConfirm = true,
  Header = null,
  Footer = null,
  size = "lg",
  desactivarCerradoenOverlay = false,
  centrado = false,
  showTitle = true,
}: {
  children: ReactElement;
  titleHead: TitleHead;
  opened: boolean;
  handlerClose?: () => void;
  handleConfirm?: () => void;
  ConfirmText?: string;
  Canceltext?: string;
  isConfirmModal?: boolean;
  isModalMedium?: boolean;
  showConfirm?: boolean;
  Footer?: ReactElement | null;
  Header?: ReactElement | null;
  size?: string;
  desactivarCerradoenOverlay?: boolean;
  centrado?: boolean;
  showTitle?: boolean;
}) {
  // Hook para detectar pantallas pequeñas (mobile/tablet)
  const { colorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const getZIndex = () => {
    if (isConfirmModal) return 999999; // Confirm siempre al tope
    if (isModalMedium) return 99999; // Medio por debajo del confirm
    return 0; // Normal con z-index base más alto
  };

  // Función para determinar el tamaño del modal
  const getModalSize = () => {
    if (isMobile) {
      // En móviles, usar tamaño completo excepto para modales de confirmación
      return isConfirmModal ? "xs" : "lg";
    }
    // En pantallas grandes, usar el size proporcionado
    return size;
  };

  const zIndexValue = getZIndex();

  return (
    <Modal
      size={getModalSize()}
      centered={centrado}
      scrollAreaComponent={ScrollArea.Autosize}
      opened={opened}
      onClose={desactivarCerradoenOverlay ? () => {} : handlerClose}
      closeOnClickOutside={desactivarCerradoenOverlay ? false : true}
      closeOnEscape={false}
      withCloseButton={false}
      overlayProps={{
        backgroundOpacity: 0.4,
        zIndex: zIndexValue + (isConfirmModal ? 0 : isModalMedium ? 0 : 200), // El overlay debe estar un nivel por debajo del modal
      }}
      zIndex={zIndexValue}
      style={{
        position: "relative",
      }}
      styles={{
        content: {
          display: "flex",
          flexDirection: "column",
          border: `1px solid ${colorScheme === "dark" ? "rgb(78, 78, 78)" : "rgba(61, 61, 61, 0.8)"}`,
        },
        body: {
          flex: 1,
          padding: "0px",
          display: "flex",
          flexDirection: "column",
          // border: `1px solid ${colorScheme === "dark" ? "rgba(61, 60, 60, 1)" : "rgba(61, 61, 61, 0.8)"}`,
        },
      }}
      transitionProps={{ duration: 300, transition: "scale-y" }}
    >
      <Paper>
        {showTitle && (
          <Stack
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              backdropFilter: "blur(13px)",
            }}
            gap={0}
            bg={
              colorScheme === "dark"
                ? "rgba(27, 28, 29, 1)"
                : "rgba(245, 245, 245, 0.80)"
            }
          >
            <Flex
              wrap="nowrap"
              direction={"row"}
              align={"center"}
              p={"2px 5px 2px 8px"}
              justify={"space-between"}
              bg={"transparent"}
            >
              <Flex direction={"row"} align={"center"} gap={10}>
                <Title order={6}>{titleHead.title}</Title>
                {titleHead.aditionalChild}
              </Flex>
              {!desactivarCerradoenOverlay && (
                <ActionIcon
                  onClick={() => handlerClose()}
                  variant="subtle"
                  size={24}
                >
                  <IconX size={"1rem"}></IconX>
                </ActionIcon>
              )}
            </Flex>
            {Header && (
              <Paper
                style={{
                  padding: "5px 7px",
                  width: "100%",
                  borderTop: 0,
                  borderLeft: 0,
                  borderRight: 0,
                  backgroundColor: "transparent",
                }}
                withBorder
                radius={0}
              >
                {Header}
              </Paper>
            )}
          </Stack>
        )}
        <Box
          style={{
            paddingBottom:
              Footer && showConfirm
                ? 170
                : Footer
                  ? 70
                  : showConfirm
                    ? isConfirmModal
                      ? 10
                      : 10
                    : 10,
            paddingTop: Header ? 10 : 7,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          {children}
        </Box>
        {(Footer || showConfirm) && (
          <Box
            style={{
              position: "sticky",
              bottom: 0,
              width: "100%",
              backdropFilter: "blur(13px)",
              padding: 10,
            }}
          >
            {Footer && <Box style={{ padding: 10 }}>{Footer}</Box>}
            {showConfirm && (
              <Flex direction={"row"} gap={5}>
                <Button fullWidth onClick={handleConfirm}>
                  {ConfirmText}
                </Button>
                <Button variant="subtle" fullWidth onClick={handlerClose}>
                  {Canceltext}
                </Button>
              </Flex>
            )}
          </Box>
        )}
      </Paper>
    </Modal>
  );
}
