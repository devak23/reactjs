import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import numeral from 'numeral';
import { Card, Icon, Grid, Feed } from 'semantic-ui-react';

const EmployeeDetailsPage = ({ employee }) => (
  <Grid>
    <Grid.Row>
      <Grid.Column>
        <Card
          image="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png"
          header={`${employee.ename} ${employee.lname}`}
          meta={employee.job}
          description={numeral(employee.sal).format('$0,0.00')}
          extra={
            <a>
              <Icon name="calendar" />
              {moment(employee.hireDate).format('MMMM Do YYYY')}
            </a>
          }
        />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Card>
          <Card.Content>
            <Card.Header>Manager Hierarchy</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label image="/assets/images/avatar/small/jenny.jpg" />
                <Feed.Content>
                  <Feed.Date content="1 day ago" />
                  <Feed.Summary>
                    You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="/assets/images/avatar/small/molly.png" />
                <Feed.Content>
                  <Feed.Date content="3 days ago" />
                  <Feed.Summary>
                    You added <a>Molly Malone</a> as a friend.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="/assets/images/avatar/small/elliot.jpg" />
                <Feed.Content>
                  <Feed.Date content="4 days ago" />
                  <Feed.Summary>
                    You added <a>Elliot Baker</a> to your <a>musicians</a>{' '}
                    group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

EmployeeDetailsPage.propTypes = {
  employee: PropTypes.shape({}).isRequired,
};

export default EmployeeDetailsPage;
