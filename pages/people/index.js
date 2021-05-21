import Layout from '../../components/layout'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import Cardpeople from '../../components/cardpeople'

// getStaticProps

import { getAllPeople } from '../../lib/api'

export async function getStaticProps() {

    const people =  await getAllPeople()

    return {
        props: { people }
    }
}

export default function People( { people } ) {
    return (
        <Layout>
            <h1>People</h1>
            <p>This is the people introduction.</p>
            <section>
                <Row justifyContentCenter>
                    {people.edges.map((edge, index) => {
                        const { node } = edge;
                        return <Col sm={6} md={4} lg={3} key={index}>
                            <Cardpeople node={node} />
                        </Col>
                    })}
                </Row>
            </section>
        </Layout>
    )
}
