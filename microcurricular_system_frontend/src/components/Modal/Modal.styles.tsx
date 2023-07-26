import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  margin-top: 20px;
  width: 55%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  @media (max-width: 480px) {
    width: 79%;
  }
  @media (min-width: 481px) and (max-width: 820px) {
    width: 87%;
  }
`;
