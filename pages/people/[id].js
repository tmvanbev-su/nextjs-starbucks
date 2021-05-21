import Layout from '../../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import Row from '../../components/row'
import Col from '../../components/col'

import { getAllPeopleSlugs, getPersonBySlug } from '../../lib/api'

// getStaticPaths

export async function getStaticPaths() {

    const allSlugs = await getAllPeopleSlugs()

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

    const personData = await getPersonBySlug(params.id)

    return {
        props : {
            personData
        }
    }

}

// initialize the component 

export default function Person({ personData }) {

    const { title, featuredImage, content } = personData; 

    const { sourceUrl, mediaDetails, altText } = featuredImage.node;
    const { width, height } = mediaDetails;

    return (
        <Layout>
            <Row>
                <Col>
                    <Link href="/people">
                        <a>Back to people</a>
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