import {
  Container,
  TitleWrap,
  Title,
  ImageContainer,
  Image,
  BtnDateWrap,
  Btn,
  TextWrap,
  TitleWrapEdit,
  TextWrapEdit,
  ImageWrapper,
} from './NewsItem.styled';
import { useTranslation } from 'react-i18next';
import { useDeleteNewsMutation, useUpdateNewsMutation } from 'services/newsApi';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

const NewsItem = ({ data }) => {
  const [editMode, setEditMode] = useState(false);
  const [editNews, setEditNews] = useState({
    title: '',
    description: '',
    image: '',
  });

  const user = useSelector(selectUser);

  useEffect(() => {
    setEditNews({
      title: data.title,
      description: data.description,
      image: data.image,
    });
  }, [data]);

  const onHandleEdit = () => {
    setEditMode(true);
  };

  const { t } = useTranslation();
  const [deleteNews] = useDeleteNewsMutation();
  const [updateNews] = useUpdateNewsMutation();

  const onHandleDelete = async () => {
    console.log(data._id);
    await deleteNews(data._id);
  };

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
        setEditNews(prevState => ({
          ...prevState,
          image: res,
        }));
      }
    } else {
      setEditNews(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  function formatDate(dateString) {
    const originalDate = new Date(dateString);
    const day = originalDate.getUTCDate().toString().padStart(2, '0');
    const month = (originalDate.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = originalDate.getUTCFullYear();
    return `${day}.${month}.${year}`;
  }

  return (
    <Container>
      {editMode ? (
        <>
          <TitleWrapEdit
            type="text"
            name="title"
            value={editNews.title}
            onChange={onHandleChange}
          />
          <TextWrapEdit
            type="text"
            name="description"
            value={editNews.description}
            onChange={onHandleChange}
          />
          <ImageWrapper>
            <div className="imageButton">
              <label className="advFormLabel">
                <input
                  id="real-file"
                  className="advAddImageInput"
                  onChange={onHandleChange}
                  type="file"
                  name="image"
                  accept="image/*" // Specify allowed file types
                />
                <button type="button" id="custom-button">
                  {t('button.chooseFile')}
                </button>
              </label>
            </div>
          </ImageWrapper>
          <Btn
            type="button"
            onClick={() => {
              updateNews({ newsId: data._id, data: editNews });
              setEditMode(false);
            }}
          >
            {t('button.save')}
          </Btn>
        </>
      ) : (
        <>
          <Container>
            <TitleWrap>
              <Title>{data.title}</Title>
            </TitleWrap>
            <ImageContainer>
              <Image src={data.image} alt="article" width="160px" height="160px" />
            </ImageContainer>
            <TextWrap readOnly={true} value={data.description}></TextWrap>
          </Container>
          <BtnDateWrap>
            <div>
              <p>{formatDate(data.updatedAt)}</p>
            </div>

            {user.role === 'admin' && (
              <Btn type="button" onClick={onHandleEdit}>
                {t('button.edit')}
              </Btn>
            )}
            {user.role === 'admin' && (
              <Btn type="button" onClick={onHandleDelete}>
                {t('button.delete')}
              </Btn>
            )}
          </BtnDateWrap>
        </>
      )}
    </Container>
  );
};

export default NewsItem;
