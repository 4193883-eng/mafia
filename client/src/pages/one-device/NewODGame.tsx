import { useState } from "react";
import globalStyles from "../../styles/Page.module.css";
// import styles from "./NewODGame.module.css";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export function NewODGame() {
  const [playerCount, setPlayerCount] = useState<number>(1);

  const [inputVal, setInputVal] = useState<string>("1");

  function handleChange(valString: string) {
    setInputVal(valString);
    const int = parseInt(valString, 10);
    if (!isNaN(int) && int <= 15 && int >= 1 && typeof int === "number") {
      setPlayerCount(int);
    }
  }

  return (
    <div className={globalStyles.fullPage}>
      <main className={globalStyles.page}>
        <Box mb={8}>
          <Heading>Select player count:</Heading>
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
            w={"max-content"}
          >
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Select Player Count</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">...</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">...</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <NumberInput
          value={inputVal}
          max={15}
          min={1}
          textAlign={"center"}
          onChange={handleChange}
          w={"6em"}
          display={"block"}
          clampValueOnBlur={true}
          onBlur={() => {
            if (inputVal === "") setInputVal("1");
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper /> <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Slider
          max={15}
          min={1}
          step={1}
          value={playerCount}
          onChange={(num) => {
            setPlayerCount(num);
            setInputVal(String(num));
          }}
          maxW={"300px"}
          focusThumbOnChange={false}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <ButtonGroup alignSelf={"flex-end"}>
          <Button>Back</Button>
          <Button
            colorScheme={"blue"}
            isDisabled={
              !(
                typeof playerCount === "number" &&
                playerCount >= 1 &&
                playerCount <= 15
              )
            }
          >
            Continue{" "}
          </Button>
        </ButtonGroup>
      </main>
    </div>
  );
}
