import React from 'react';
import { ListRepos } from '../components/repos/ListRepos';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const Dashboard = () => {
    return (
        <>
            <ListRepos/>
            <Card>
                <CardBody>
                    <CardTitle>título</CardTitle>
                    <CardText>Texto do card</CardText>
                </CardBody>
            </Card>
        </>
        
    )
}

export default Dashboard;