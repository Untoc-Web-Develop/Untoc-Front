import React from 'react';

import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types'; // prop-types 추가

const TeamInfoCard = ({ title }) => {
  return (
    <Card className="w-72">
      <CardActionArea>
        <CardMedia component="img" image="/asset/recruit/recruitImg.png" alt="green iguana" className="h-32" />
        <CardContent className="bg-red-200 !px-4 !py-2 ">
          <Typography className="!text-lg !font-medium">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
TeamInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TeamInfoCard;
