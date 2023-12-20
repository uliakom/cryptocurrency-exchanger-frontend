import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  height: 600px;
  border: 1px solid #d3d3d3;
  overflow-y: scroll;
  &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #A1812E;
        width: 0.1rem;
        border-radius: 1rem;
      }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 20px 0px 20px 0px;
  gap: 10px;
`;

export const Item = styled.li`
  width: 95%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  padding-left: 20px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  cursor: pointer;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.02);
    background-color: #3e45c3;
  }
  background-color: ${({ isSelected }) => (isSelected ? '#cfad56' : 'rgba(255, 255, 255, 0.3)')};
`;

export const AvatarWrap = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #d3d3d3;
  border-radius: 50%;
  background: rgb(62, 69, 195);
  background: linear-gradient(90deg, rgba(62, 69, 195, 1) 0%, rgba(240, 193, 74, 1) 100%);
  p {
    text-align: center;
    font-size: 26px;
    color: ${({ isSelected }) => (isSelected ? ({ theme }) => theme.colors.text : 'black')};
  }
`;
