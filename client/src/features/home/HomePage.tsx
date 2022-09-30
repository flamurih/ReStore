import { Typography } from '@mui/material'
import { Box } from '@mui/system';
import Slider from 'react-slick';
import hero1 from './/images/hero1.jpg' ;
import hero2 from './/images/hero2.jpg' ;
import hero3 from './/images/hero3.jpg' ;

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      <Slider {...settings}>
        <div>
          <img src={hero1} alt='hero' style={{display:'block', width:'100%', maxHeight: 500}}/>
        </div>
        <div>
          <img src={hero2} alt='hero' style={{display:'block', width:'100%', maxHeight: 500}}/>
        </div>
        <div>
          <img src={hero3} alt='hero' style={{display:'block', width:'100%', maxHeight: 500}}/>
        </div>
      </Slider>
      <Box display='flex' justifyContent='center' sx={{p: 4}}>
        <Typography variant='h1'>
          Welcome to the shop!
        </Typography>
      </Box>
    </>
  )
}
