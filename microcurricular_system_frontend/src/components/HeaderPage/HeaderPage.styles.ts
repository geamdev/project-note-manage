import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1.5rem 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const Text = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: #000;
  margin: 0;
  margin-left: 1.8rem;
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const TextSecond = styled.button`
  border: none;
  background-color: transparent;
  font-size: 0.7rem;
  font-weight: 500;
  color: #000;
  margin: 0;
  margin-right: 1.8rem;
  & > svg {
    color: #108fd8;
  }
  @media (max-width: 480px) {
    margin-right: 0;
    margin-left: 1.8rem;
  }
`;
