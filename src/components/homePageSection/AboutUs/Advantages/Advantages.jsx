import { Item, List, Text, Title, Wrapper } from './Advantages.styled';
import { useTranslation } from 'react-i18next';

const Advantages = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <List>
        <Item>
          <Title>{t('about.cardTitle1')}</Title>
          <Text>{t('about.cardDesc1')}</Text>
        </Item>
        <Item>
          <Title>{t('about.cardTitle2')}</Title>
          <Text>{t('about.cardDesc2')}</Text>
        </Item>
        <Item>
          <Title>{t('about.cardTitle3')}</Title>
          <Text>{t('about.cardDesc3')} </Text>
        </Item>
        <Item>
          <Title>{t('about.cardTitle4')}</Title>
          <Text>{t('about.cardDesc4')}</Text>
        </Item>
        <Item>
          <Title>{t('about.cardTitle5')}</Title>
          <Text>{t('about.cardDesc5')}</Text>
        </Item>
        <Item>
          <Title>{t('about.cardTitle6')}</Title>
          <Text>{t('about.cardDesc6')}</Text>
        </Item>
      </List>
    </Wrapper>
  );
};

export default Advantages;
