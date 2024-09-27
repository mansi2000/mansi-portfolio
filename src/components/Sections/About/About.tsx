import { Container, Box, Grid } from '@mui/material';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import ReadMore from '../ReadMore/ReadMore';
import { ColorModeContext } from '../../../../pages/_app';
import { useContext } from 'react';
const About = () => {
    const colorMode = useContext(ColorModeContext)
    return (
    <>
        <Container
        id='about'
            maxWidth='lg'
            sx={{
            margin: '0 auto',
            py: '6em',
          
        }}>
            <Grid
                container
                sx={{
                justifyContent: {
                    sm: 'center',
                    md: 'space-between'
                }
            }}>

                <Grid item xs={12} sm={12} md={4} lg={5}>
                    <Box
                        sx={{
                        maxWidth: '400px',
                        width: '100%',
                        height: '450px',
                        margin: '0 auto',
                        boxShadow: {
                            xs: '-.5em 1.5em 0px #0092ff',
                            sm: '-1.5em 1.5em 0px #0092ff'
                        },
                        position: 'relative'
                    }}>
                        <Box
                            sx={{
                            width: '100px',
                            height: '100px',
                            zIndex: '0',
                            position: 'absolute',
                            right: {
                                xs: '-4%',
                                sm: '90%'
                            },
                            
                            bottom: {
                                xs: '-5%',
                                sm: '-10%'
                            },
                            background: 'transparent',
                            backgroundImage:colorMode.mode === 'dark' ? 'radial-gradient(white 2px, transparent 0)' : 'radial-gradient(black 2px, transparent 0)',
                            backgroundSize: '15px 13px'
                        }}></Box>
                        <Image
                            alt='Personal Image'
                            className='img1 '
                            layout='fill'
                            src={`https://ucarecdn.com/efbee217-a29a-4cae-b692-8112dac3882c/profilepic.png`}/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7.5} lg={7}>
                    <Box sx={{
                        pb: '.5em'
                    }}>
                        <Typography
                            variant='h1'
                            sx={{
                            fontSize: {
                                xs: '2.2em',
                                sm: '2.5em',
                                md: '3em'
                            },
                            py: '.5em',
                            pt: {
                                xs: '1.8em',
                                md:0,
                            }
                        }}
                            fontWeight='600'>
                            Hello! I&apos;m Mansi Bansal
                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{
                            maxWidth: '570px',
                            fontSize: {
                                xs: '.8em',
                                sm: '1em'
                            }
                        }}>
                      A Computer Science Engineer with prior experience at Hewlett-Packard and NetApp, Bangalore. I first started developing AR/VR apps using Unity3D, but soon realized I preferred web and mobile app development, and I&apos;ve been building and working on that for the past 6 years now.

                        </Typography>
                    </Box>
                    <Typography
                            variant='h2'
                            sx={{
                            maxWidth: '570px',
                            fontSize: {
                                xs: '.8em',
                                sm: '1em'
                            },
                            pb:'.5em'
                        }}>
                      Building new things made me appreciate entreprenuership; thus, I&apos;m building a Music Company simultaneously. Music and technology are both my passions.

                        </Typography>
                    <ReadMore>
                    Aside from working hard, I tend to enjoy simple things like swimming, petting cats, and other things we humans do. If any of what I said seems interesting, then please do not hesitate to send me a message.
                    </ReadMore>
                </Grid>
            </Grid>

        </Container>

        </>
    
    )
}

export default About
