import styled from '@emotion/styled';
import { setBgImage } from '../../helpers/setBgImage';
import { NavLink } from 'react-router-dom';
import mediaBp from 'styles/breakpoints';

export const ProfileHeader = styled.div`
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 120px;
  margin-top: -120px;
`;
export const TextHeader = styled.p`
  display: none;
  ${mediaBp('desktop')} {
    display: block;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const AvatarHeader = styled.div`
  cursor: ${({ role }) => (role === 'admin' ? 'pointer' : 'auto')};
  display: none;
  ${mediaBp('tablet')} {
    display: block;
    border-radius: 50%;
    text-align: center;
    background-image: ${setBgImage};
    margin: 20px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: white;
    line-height: 3em;
    width: 50px;
    height: 50px;
  }
  ${mediaBp('desktop')} {
    display: block;
    border-radius: 50%;
    text-align: center;
    background-image: ${setBgImage};
    margin: 20px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: white;
    line-height: 3em;
    width: 50px;
    height: 50px;
  }
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
`;
export const ProfileWrapper = styled.div`
  ${mediaBp('tablet')} {
    display: flex;
    margin: 0 auto;
  }
  ${mediaBp('desktop')} {
    display: flex;
    margin: 0 auto;
  }
`;
export const Box = styled.div`
  flex-direction: column;
  align-items: center;

  ${mediaBp('tablet')} {
    width: 840px;
    padding: 20px 20px;
  }
  ${mediaBp('desktop')} {
    min-width: 840px;
    padding: 20px 20px;
  }
`;
export const Content = styled.div`
  text-align: center;
  padding: 10px 10px;
  height: 300px;
`;
export const Avatar = styled.div`
  border-radius: 50%;
  text-align: center;
  background-image: ${setBgImage};
  margin: 0 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: white;
  line-height: 3em;
  width: 50px;
  height: 50px;
  ${mediaBp('tablet')} {
    display: none;
  }
  ${mediaBp('desktop')} {
    display: none;
  }
`;
export const Flex = styled.div`
  padding: 5px 10px;
  ${mediaBp('tablet')} {
    display: flex;
    justify-content: space-between;
  }
  ${mediaBp('desktop')} {
    display: flex;
    justify-content: space-between;
  }
`;

// ====================================
export const InputText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  ${mediaBp('tablet')} {
  }
  ${mediaBp('desktop')} {
    margin-right: 50px;
    font-size: 16px;
    font-weight: 700;
  }
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 20px;
  ${mediaBp('tablet')} {
    margin-right: 25px;
  }
  ${mediaBp('desktop')} {
    margin-right: 60px;
    font-size: 18px;
  }
`;

export const BoxR = styled.div`
  align-items: center;
`;

export const LinkGo = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: ${({ theme }) => theme.colors.hovers};
  }
`;
export const Link = styled(NavLink)`
  display: flex;
  cursor: pointer;
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.primary};
  &.active {
    color: ${({ theme }) => theme.colors.hovers};
    text-decoration: underline;
  }
  svg {
    display: none;
  }
  ${mediaBp('tablet')} {
    margin-right: 0px;
    margin-top: 50px;
    padding-left: 20px;
    align-items: center;
    width: 160px;
    height: 50px;
    border-right: none;
    svg {
      width: 25px;
      height: 25px;
      display: block;
      fill: ${({ theme }) => theme.colors.primary};
      margin-right: 10px;
    }
    &.active {
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-right: transparent;
      background-color: ${({ theme }) => theme.colors.body};
      margin-right: -2px;
      text-decoration: none;
    }
  }
  ${mediaBp('desktop')} {
    padding-left: 20px;
    align-items: center;
    max-width: 304px;
    height: 60px;
    margin-top: 60px;
    margin-right: 0;
    margin-left: 20%;
    border-right: none;
    overflow: hidden;
    svg {
      width: 25px;
      height: 25px;
      display: block;
      fill: ${({ theme }) => theme.colors.primary};
      margin-right: 10px;
    }
    &.active {
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-right: transparent;
      background-color: ${({ theme }) => theme.colors.body};
      margin-right: -2px;
      text-decoration: none;
    }
  }
`;
export const ProfileNav = styled.div`
  display: flex;
  padding: 10px 20px;
  ${mediaBp('tablet')} {
    background-image: url('${({ theme }) => theme.colors.background}');
    background-size: cover;
    max-width: 250px;
    display: block;
    padding: 0;
    flex-direction: column;
    height: 100%;
    border-right: 2px solid ${({ theme }) => theme.colors.primary};
  }
  ${mediaBp('desktop')} {
    padding: 0;
    display: flex;
    flex-direction: column;
    background-image: url('${({ theme }) => theme.colors.background}');
    background-size: cover;
    background-repeat: no-repeat;
    width: 390px;
    height: 100%;
    border-right: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  ${mediaBp('tablet')} {
    flex-direction: column;
    margin: 0 0 40px 70px;
  }
  ${mediaBp('desktop')} {
    flex-direction: column;
  }
`;

export const ExitButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  svg {
    display: none;
  }
  :hover {
    color: ${({ theme }) => theme.colors.hovers};
    text-decoration: underline;
  }

  ${mediaBp('tablet')} {
    background: transparent;
    :hover {
      text-decoration: none;
      background-color: ${({ theme }) => theme.colors.body};
    }
    border: 2px solid ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 44px;
    margin: 140px 100px 40px 100px;
    svg {
      width: 25px;
      height: 25px;
      display: block;
      fill: ${({ theme }) => theme.colors.primary};
      margin-right: 10px;
    }
  }
  ${mediaBp('desktop')} {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    &.active,
    :hover {
      color: ${({ theme }) => theme.colors.hovers};
      text-decoration: none;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 44px;
    margin: 140px 120px 80px 120px;
    svg {
      width: 25px;
      height: 25px;
      display: block;
      fill: ${({ theme }) => theme.colors.primary};
      margin-right: 10px;
    }
    :hover {
      color: ${({ theme }) => theme.colors.hovers};
      text-decoration: none;
      background-color: ${({ theme }) => theme.colors.body};
    }
  }
`;
export const TextReview = styled.div`
  color: ${({ theme }) => theme.colors.hovers};
  padding: 20px;
`;
