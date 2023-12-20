import styled from '@emotion/styled';

export const Flex = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const CaptchaBtn = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
