import React from 'react';
import { Segment } from 'semantic-ui-react';

const Banner = ({ message, color, author }) => (
    <Segment>
        <p style={{ color }}>{message}</p>
        <p><strong>- {author}</strong></p>
    </Segment>
);

export default Banner;