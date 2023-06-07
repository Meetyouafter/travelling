import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import places from '../../mockData/russia/places';

const PlaceSection = () => (
  <ImageList gap={16}>
    {places.map((place) => (
      <ImageListItem key={place.id}>
        <img
          src={`${place.image}?w=248&fit=crop&auto=format`}
          srcSet={`${place.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={place.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={place.title}
          subtitle={place.description}
          actionIcon={(
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${place.title}`}
            >
              <InfoIcon />
            </IconButton>
            )}
        />
      </ImageListItem>
    ))}
  </ImageList>
);

export default PlaceSection;
