import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardText, CardTitle, Container, Row, Col } from 'reactstrap';
import { getRepositories } from '../services/dashboard';


const Dashboard = () => {
    const [repositories, setRepos] = useState();

    useEffect(() => {
        const requestRepos = async () => {
            const response = await getRepositories();
            console.log(response.data);
            setRepos(response.data);
        }
        requestRepos();
    },[])

    return (
        <>
            <Container>
                <Row>
                    {
                        (repositories && repositories.length > 0) ? (
                            Array.from({length: 4}).map(() => {
                                return(
                                    <Col>
                                        <Card>
                                            <CardBody>
                                                <CardTitle>Total de repositórios</CardTitle>
                                                <CardText>{repositories.length}</CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    )
                                }
                            )
                        ) : <h2>Loading...</h2>
                    }
                </Row>
            </Container>
        </>
        
    )
}

export default Dashboard;