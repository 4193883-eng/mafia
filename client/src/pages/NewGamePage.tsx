import { Link } from "react-router-dom";
import styles from "./NewGamePage.module.css";
import globalStyles from "../styles/Page.module.css";
import { Button } from "@chakra-ui/react";
import { Logo } from "../components/Logo";

export function NewGamePage() {
  return (
    <div className={globalStyles.fullPage}>
      <main className={globalStyles.page}>
        <Logo className={styles.logo} />
        <div className={styles.buttonGroup}>
          <Button
            as={Link}
            to={"/one-device"}
            variant={"solid"}
            colorScheme={"teal"}
          >
            New One-Device Game
          </Button>
          <Button isDisabled={true}>Host a game</Button>
          <Button isDisabled={true}>Join a game</Button>
        </div>
      </main>
    </div>
  );
}
