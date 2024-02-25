import * as React from 'react';

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const ImgTooltip = styled(({ title, className, src, alt, imgClassName }) => (
  <Tooltip title={title} classes={{ popper: className }}>
    <img src={src} alt={alt} className={imgClassName} />
  </Tooltip>
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(255,255, 255, 0.3)',
    color: 'rgba(0, 0, 0, 0.3)',
    boxShadow: theme.shadows[0],
    fontSize: 11,
  },
}));

export default ImgTooltip;
