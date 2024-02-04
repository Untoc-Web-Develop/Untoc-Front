import React from 'react';

import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import teamInfo from 'asset/main/teamImg.png';
import PropTypes from 'prop-types'; // prop-types 추가

const TeamInfoCard = ({ title, content, IsCaptionRequired }) => {
  return (
    <Card className="w-72 !shadow-md">
      <CardActionArea>
        <CardMedia component="img" image={teamInfo} alt="teamInfo Card" className="h-40" />
        {IsCaptionRequired && (
          <CardContent className="!px-4 !py-2 ">
            <Typography className="!text-md !font-bold">{title}</Typography>
            <Typography className="!text-xs !text-gray-400">{content}</Typography>
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
};
TeamInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  IsCaptionRequired: PropTypes.bool.isRequired,
};

export default TeamInfoCard;
