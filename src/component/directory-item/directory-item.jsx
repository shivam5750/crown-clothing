import {
    BackgroundImage,
    Body,
    DirectoryItemContainer,
  } from './directory-item.style';
  
  const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
      <DirectoryItemContainer to={`shop/${title}`}>
        <BackgroundImage imageurl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer>
    );
  };
  
  export default DirectoryItem;