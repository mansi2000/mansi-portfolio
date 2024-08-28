import {Box} from '@mui/material'
import type {NextPage}
from 'next'
import Hero from '../src/components/Sections/Hero/Hero'
import Perks from '../src/components/Sections/Perks/Perks'
import Projects from '../src/components/Sections/Projects/Projects';
import CTA from '../src/components/Sections/CallToAction/CTA'
import {useEffect, useRef} from 'react';
import CursorAnimation from '../src/gsap/CursorAnimation';
import About from '../src/components/Sections/About/About';
import Layout from '../Layout/Layout'

const Home : NextPage = ({projectsArray, iconsArray} : any) => {
    const ball = useRef()

    useEffect(() => {
        if (ball && ball.current) {
            CursorAnimation(ball.current)
        }

    }, [])
    return (
        <Layout desc={`Mansi Bansal, A professional software engineer in Delhi, Can develop all kinds of websites and web/mobile applications according to your needs`} title='Mansi Bansal Fullstack Developer Personal Portfolio Website'>

            <Box
                sx={{
                margin: '0 auto',
                color: 'white'
            }}>

                <Hero/>
                <Perks/>
                <Projects projectsArray={projectsArray}/>
                <About/>
                <CTA/>

                <Box
                    ref={ball}
                    sx={{
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }}
                    className="ball"></Box>

            </Box>
        </Layout>

    )
}

export default Home

export async function getStaticProps() {
    function removeEmpty(obj : any) {
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v != false));
    }
    try {
        // first, grab our Contentful keys from the .env file
        
        const space = '2ggju1yoefwf';
        const accessToken = 'xYSlv70bf8oWeaPvQtg8c_E7EGfDcXZrEe-io0yVOKA';
        
        // then, send a request to Contentful (using the same URL from GraphiQL)
        const res =    await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                query: `
                    {
                        projectsCollection {
                            items {
                                title
                                desc
                                img { url title }
                                repoUrl
                                siteUrl
                            }
                        }
                    }
                `,
            }),
              redirect: "follow"
        },);

        console.log(res);

        // grab the data from our response
        const data = await res.json()


        // const data :any = {}
        if (!data || data?.length < 1 || data.data.projectsCollection.items.length < 1) {
            throw 'Error fetching data'
        }

        return {
            props: {
                projectsArray: data.data.projectsCollection.items,
            }
        }
    } catch (err) {
        console.log('err: ', err);
        return {
            props: {
                data: null
            }
        }
    }
}
