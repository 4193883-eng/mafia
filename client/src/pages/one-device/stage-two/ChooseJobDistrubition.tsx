import { Box, Flex, Heading } from "@chakra-ui/react";
import styles from "../../../styles/Page.module.css";

export function ChooseJobDistribution() {
  const playerCount = 10;

  return (
    <div className={styles.fullPage}>
      <Box className={styles.page} fontSize={"1em"}>
        <Heading>Choose Jobs</Heading>
        <Flex
          aspectRatio={1}
          width={"2em"}
          borderWidth={1}
          borderRadius={"0.3em"}
          fontSize={"xx-large"}
          justifyContent={"center"}
          lineHeight={"2em"}
        >
          {playerCount}
        </Flex>
        <span>Remaining players</span>
      </Box>
    </div>
  );
}
