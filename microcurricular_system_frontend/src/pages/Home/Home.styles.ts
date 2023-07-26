import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 20px;
  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`;
