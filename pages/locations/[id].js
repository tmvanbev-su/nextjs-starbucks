import Layout from '../../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import Row from '../../components/row'
import Col from '../../components/row'

import { getAllLocationSlugs, getLocationBySlug } from '../../lib/api'



// getStaticPaths

export async function getStaticPaths() {

    const allSlugs = await getAllLocationSlugs()

    const paths = allSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id: slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }

}
// getStaticProps

export async function getStaticProps({ params }) {

    const locationData = await getLocationBySlug(params.id)

    return {
        props : {
            locationData
        }
    }

}



// initialize the component 

export default function Location({ locationData }) {

    const { title, featuredImage, content } = locationData; 

    const { sourceUrl, mediaDetails, altText } = featuredImage.node;
    const { width, height } = mediaDetails;

    return (
        <Layout>
            <Row>
                <Col>
                    <Link href="/locations">
                        <a>Back to locations</a>
                    </Link>
                </Col>
            </Row>
            
            <Image 
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}/>
        </Layout>
    )
}

