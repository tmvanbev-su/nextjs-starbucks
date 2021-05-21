import Layout from '../../components/layout'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import Cardlocations from '../../components/cardlocations'

// getStaticProps

import { getAllLocations } from '../../lib/api'

export async function getStaticProps() {

    const locations =  await getAllLocations()

    return {
        props: { locations }
    }
}

export default function Locations( { locations } ) {
    return (
        <Layout>
            <h1>Locations</h1>
            <p>This is the locations introduction.</p>
            <section>
                <Row justifyContentCenter>
                    {locations.edges.map((edge, index) => {
                        const { node } = edge;
                        return <Col sm={6} md={4} lg={3} key={index}>
                            <Cardlocations node={node} />
                        </Col>
                    })}
                </Row>
            </section>
        </Layout>
    )
}
