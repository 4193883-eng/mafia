import { useState } from "react";
import globalStyles from "../../../styles/Page.module.css";
// import styles from "./_.module.css";
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
import { Link } from "react-router-dom";

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
          min={4}
          textAlign={"center"}
          onChange={handleChange}
          w={"6em"}
          display={"block"}
          clampValueOnBlur={true}
          onBlur={() => {
            if (inputVal === "") setInputVal("4");
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper /> <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Slider
          max={15}
          min={4}
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
          <Button as={Link} to="/">
            Back
          </Button>
          <Button
            colorScheme={"blue"}
            as={Link}
            to={"../stage-two"}
            isDisabled={
              !(
                typeof playerCount === "number" &&
                playerCount >= 4 &&
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
