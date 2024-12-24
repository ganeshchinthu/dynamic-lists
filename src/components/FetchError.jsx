import styled from "styled-components";
import Button from "../ui/Button";
import { useState } from "react";
import useList from "../context/ListContext";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7rem;
`;
const Heading = styled.h3`
  font-size: 2.5rem;
  font-weight: 300;
  color: grey;
`;

function FetchError() {
  const { refetchData } = useList();

  return (
    <StyledContainer>
      <img src="fail.png" alt="fetch data error" />
      <Heading>Something went wrong please try again</Heading>
      <Button onClick={refetchData}>Try again</Button>
    </StyledContainer>
  );
}

export default FetchError;
