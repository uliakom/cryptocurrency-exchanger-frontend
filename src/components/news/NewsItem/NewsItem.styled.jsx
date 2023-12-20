import styled from '@emotion/styled';

export const Container = styled.div`
  // flex-direction: column;
  // display: flex;
  width: 300px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.01);
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row !important;
  height: 80px;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const ImageContainer = styled.div`
  flex-direction: column !important;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
`;

export const TextWrap = styled.textarea`
  box-sizing: border-box;
  resize: none;
  &::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      background-color: rgba(3, 3, 103, 0.1);
      width: 0.1rem;
      border-radius: 1rem;
    }
  }
  align-items: center;
  margin-bottom: 25px;
  height: 300px;
  width: 300px;
  padding: 8px 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
`;

// export const Text = styled.p`
//   color: ${({ theme }) => theme.colors.primary};
//   white-space: wrap;
//   width: 100%;
//   padding: 8px 16px;
//   font-family: Roboto;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 24px;
//   margin-left: 16px; /* Add some spacing between the text and image */
// `;

export const BtnDateWrap = styled.div`
  display: flex;
  flex-direction: row !important ;
  justify-content: space-around;
  p {
    color: ${({ theme }) => theme.colors.primary};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const Btn = styled.button`
  margin: 10px;
  color: #fff;
  display: inline-flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #3e45c3;
  &:active {
    transform: scale(0.99);
    transition: transform 0.1s ease-in-out;
    background-color: rgba(63, 70, 195, 0.4);
  }
`;

export const TitleWrapEdit = styled.input`
  display: flex;
  flex-direction: row !important;
  padding: 8px 16px;
  height: 40px;
  width: 280px;
  margin-bottom: 11px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const TextWrapEdit = styled.textarea`
  overflow: scroll;
  height: 500px;
  width: 280px;
  padding: 8px 16px;
  margin-bottom: 25px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
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
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
    padding: 8px 20px;
    margin-bottom: 10px;
    border-radius: 14px;
    border: none;
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

    color: #555;
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
    width: 300px;
    margin-bottom: 10px;
  }
`;
