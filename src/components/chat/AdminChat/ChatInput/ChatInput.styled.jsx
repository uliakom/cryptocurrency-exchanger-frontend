import styled from '@emotion/styled';

export const StyledForm = styled.form`
  background-color: transparent;
  display: flex;
  gap: 10px;
`;

export const InputWrap = styled.div`
  display: inline-block;
  width: 90%;
  input {
    height: 40px;
    width: 100%;
    padding: 0px 0px 0px 20px;
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SBtnWrap = styled.div`
  display: inline-block;

  width: 10%;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  }
`;
