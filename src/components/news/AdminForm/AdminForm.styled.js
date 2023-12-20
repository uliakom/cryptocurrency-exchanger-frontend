import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin-top: 40px;
  padding: 24px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 16px;
`;

export const Form = styled.form`
  display: flex;
  width: 80vw;

  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Textarea = styled.textarea`
  width: 60vw;
  height: 200px;
  margin-bottom: 40px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;
export const Input = styled.input`
  width: 60vw;
  margin-bottom: 40px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const Span = styled.span`
  margin-bottom: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 16px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #5f66ea;
  }
  &:active {
    transform: scale(0.99);
    transition: transform 0.1s ease-in-out;
    background-color: rgba(63, 70, 195, 0.4);
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  .advAddImageInput {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  .addedImageInput {
    margin-bottom: 10px;
    width: 300px;
  }
  .advFormLabelCheckbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    hihgt: 30px;
    gap: 20px;
    margin: 10px 0 20px 0;
    font-size: 16px;
  }
  /* Стилі для кнопки */

  #custom-button {
    background: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    padding: 8px 20px;
    margin-bottom: 10px;
    border-radius: 14px;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: #5f66ea;
    }
    &:active {
      transform: scale(0.99);
      transition: transform 0.1s ease-in-out;
      background-color: rgba(63, 70, 195, 0.4);
    }
  }
  #file-name {
    margin-bottom: 4px;

    color: ${({ theme }) => theme.colors.text};
  }

  .advFormLabel {
    position: relative;
  }

  /* Стилі для відображення імені вибраного файлу */
  .advAddImageInput::before {
    content: 'Файл не обраний';
  }

  /* Стилі для зміни відображення імені вибраного файлу при його обранні */
  .advAddImageInput:valid::before {
    content: attr(value);
  }

  .advFormLabelCheckBox {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
  }

  .imageButton {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SideWrapper = styled.div`
  display: flex;
  width: 100%;
`;
