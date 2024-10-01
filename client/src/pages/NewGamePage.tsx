import { Link } from "react-router-dom";
import styles from "./NewGamePage.module.css";
import globalStyles from "../styles/Page.module.css";
import { Button } from "@chakra-ui/react";
import { Logo } from "../components/Logo/Logo";

export function NewGamePage() {
  return (
    <div className={globalStyles.fullPage}>
      <main className={globalStyles.page}>
        <Logo className={styles.logo} />
        <div className={styles.buttonGroup}>
          <Button
            as={Link}
            to={"/one-device/stage-one"}
            variant={"solid"}
            colorScheme={"teal"}
          >
            New One-Device Game
          </Button>
          <Button isDisabled>Host a game</Button>
          <Button isDisabled>Join a game</Button>
        </div>
      </main>
    </div>
  );
}
