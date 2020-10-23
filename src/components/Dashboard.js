import React from 'react';
import { Card } from 'semantic-ui-react'

const Dashboard = () => {
  return(
    <div>
    <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>ACCREDITATION</Card.Header>
        <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Card.Header content='ENROLMENT' />
        <Card.Description content='' />
      </Card.Content>
    </Card>

    <Card>
      <Card.Content
        header='SUBSCRIPTION'
        description='Elliot is a music producer living in Chicago.'
      />
    </Card>

    <Card
      header='REPORTS'
      description='Jenny is a student studying Media Management at the New School'
    />
  </Card.Group>
  </div>

  );
};

export default Dashboard;