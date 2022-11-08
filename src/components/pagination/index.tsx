import React from "react";
import { Container } from "../../layout/container";
import { PaginationContainer, ButtonNavigation } from "./pagination.styles";
import { Button } from "../button";
import { ChevronRight, ChevronLeft } from "../icons";
import { getPaginationsItems } from "../../../utils/pagination.util";

interface PageProps {
  currentPage: number,
  lastPage: number
  maxLength: number
  setCurrentPage: (prev: number) => void
}

export const Pagination = ({ currentPage, lastPage, setCurrentPage,
  maxLength }: PageProps) => {

  const demoData = getPaginationsItems(currentPage, lastPage, maxLength);

  return (
    <Container>
      <PaginationContainer
      >
        <Button
          disabled={currentPage === 1}
          handleClick={() => setCurrentPage(currentPage - 1)}
        >
          <ChevronLeft />
        </Button>
        <ButtonNavigation>
          {demoData.map((item) => (
            <Button
              key={item}
              disabled={isNaN(item)}
              handleClick={() => setCurrentPage(item)}
              active={item === currentPage}
            >
              {!isNaN(item) ? item : "..."}
            </Button>
          ))}
        </ButtonNavigation>
        <Button
          disabled={currentPage === lastPage}
          handleClick={() => setCurrentPage(currentPage + 1)}>
          <ChevronRight />
        </Button>
      </PaginationContainer>
    </Container>
  );
};
