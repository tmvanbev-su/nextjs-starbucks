import Image from 'next/image'
import Link from 'next/link'
import Heading from './heading'

export default function Card( { node } ) {

    const { title, slug, featuredImage } = node;

    const { sourceUrl, mediaDetails, altText } = featuredImage.node;

    const { width, height } = mediaDetails;

    return (
        <div className="card">
            <Image 
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            />
            <Heading type="h3">
                <Link href={`/locations/${slug}`}>
                    <a>
                        {title}
                    </a>
                </Link>
            </Heading>
        </div>
    )
}

