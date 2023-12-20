import { useEffect, useState } from 'react';
import {
  Wrapper,
  Title,
  Form,
  Label,
  Span,
  Input,
  Textarea,
  Button,
  ImageWrapper,
  LeftSide,
  RightSide,
  SideWrapper,
} from './AdminForm.styled';
import { useTranslation } from 'react-i18next';
import { useAddNewsMutation } from 'services/newsApi';

const AdminForm = () => {
  const [state, setState] = useState({
    title: '',
    image: '',
    description: '',
  });

  const [addNews, { data, error }] = useAddNewsMutation();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);

  const onHandleSubmit = e => {
    e.preventDefault();
    addNews(state);
    setState({
      title: '',
      image: '',
      description: '',
    });
  };

  const { t } = useTranslation();

  const toDataURL = element => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(element.files[0]);
    });
  };

  const onHandleChange = async e => {
    const { name, type, value } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];
      const maxSize = 100000;
      if (file.size > maxSize) {
        alert('Файл занадто великий. Максимальний розмір - 100 кілобайт');
        e.target.value = '';
      } else {
        const res = await toDataURL(e.target);
        setState(prevState => ({
          ...prevState,
          image: res,
        }));
      }
    } else {
      setState(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <Wrapper>
      <Title> {t('admin.adminForm')}</Title>
      <Form onSubmit={onHandleSubmit}>
        <SideWrapper>
          <LeftSide>
            <Label>
              <Span>{t('admin.title')}</Span>
              <Input type="text" name="title" value={state.title} onChange={onHandleChange} />
            </Label>
            <Label>
              <Span>{t('admin.content')}</Span>
              <Textarea
                type="text"
                name="description"
                value={state.description}
                onChange={onHandleChange}
              />
            </Label>
          </LeftSide>
          <RightSide>
            <ImageWrapper>
              <div className="imageButton">
                <label className="advFormLabel">
                  <input
                    id="real-file"
                    className="advAddImageInput"
                    onChange={onHandleChange}
                    type="file"
                    name="altImage"
                    accept="image/*" // Specify allowed file types
                  />
                  <img
                    className="addedImageInput"
                    src={state.image || 'https://via.placeholder.com/150'}
                    alt={state.image || ': file not selected'}
                  />
                  <button type="button" id="custom-button">
                    {t('button.chooseFile')}
                  </button>
                </label>
              </div>
            </ImageWrapper>
          </RightSide>
        </SideWrapper>
        <Button type="submit">{t('button.addNews')}</Button>
      </Form>
    </Wrapper>
  );
};

export default AdminForm;
