import styled from '@emotion/styled';

export const ImageGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${p => p.theme.space.ml};
`;

export const ImageGalleryListItem = styled.li`
  margin: ${p => p.theme.space.ml};
  width: calc((100vw - 80px) / 4);
  border-radius: ${p => p.theme.radii.small};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
