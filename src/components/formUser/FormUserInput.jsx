import { useTranslation } from 'react-i18next';
import { BoxWrapper, Button, Text } from './formUser.styled';
import Input from 'components/input';

const FormUserInput = ({
  fieldName,
  labelKey,
  visibleInput,
  setInput,
  user,
  handleChange,
  required = false,
}) => {
  const { t } = useTranslation();

  return (
    <BoxWrapper>
      <Text>{t(labelKey)}</Text>
      <Text>{user[fieldName]}</Text>
      {visibleInput ? (
        <Input
          label={t(labelKey)}
          type="text"
          name={fieldName}
          margin="none"
          placeholder={t(labelKey)}
          defaultValue={user[fieldName]}
          onChange={handleChange}
          required={required}
        />
      ) : (
        <Button type="button" onClick={setInput}>
          {t(`button.edit`)}
        </Button>
      )}
    </BoxWrapper>
  );
};

export default FormUserInput;
