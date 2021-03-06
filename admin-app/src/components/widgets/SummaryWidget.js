import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Status } from '../helpers/Utils';
import { faDatabase, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import RefreshButton from '../widgets/RefreshButton';
import { createUseStyles } from 'react-jss';

const getStyles = createUseStyles({
  cardTitle: {
    fontFamily: 'Oswald',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginTop: '5%',
    fontWeight: 'bold',    
  },
  detailBox: {
    marginTop: '10%'
  },
  divider: {
    position: 'absolute',
    left: '50%',
    marginTop: '30%',
    marginLeft: '-4%',
    top: '10%',
    bottom: '15%',
    borderLeft: '1px solid #CCC',
  },
  leftBox: {
    width: '100px',
    float: 'left',
    height: '100px'
  },
  rightBox: {
    width: '100px',
    float: 'right',
    height: '100px'
  }  
});

const StatusData = {
  statuses: [
    { code: Status.RED, displayIcon: faThumbsDown, color: '#ff5722 ' },
    { code: Status.AMBER, displayIcon: faDatabase, color: '#f9a825' },
    { code: Status.GREEN, displayIcon: faThumbsUp, color: '#43a047' }
  ]
};

const SummaryWidget = ({data}) =>  {
    let classes = getStyles()
    let status = data[0].status;
    let statusObj = StatusData.statuses.filter(item => item.code === status)[0];
    return (
      <Fragment>
        <div className='card horizontal'>
          <div className='card-image'>
            <FontAwesomeIcon icon={statusObj.displayIcon} size='6x' color={statusObj.color} />
          </div>
          <div className='card-stacked'>
            <div className='card-content'>
              <div className={classes.cardTitle}>
                {data[0].metric1} - {data[0].value1}
              </div>
              <p className={classes.sectionTitle}>
                {data[0].metric2} - {data[0].value2}
              </p>
              <div className={classes.detailBox}>
                <div className={classes.leftBox}>
                  <p className={classes.sectionTitle}>{data[1].metric1}</p>
                  <p>{data[1].value1}</p>
                  <p className={classes.sectionTitle}>{data[2].metric1}</p>
                  <p>{data[2].value1}</p>
                </div>
                <div className={classes.divider}></div>
                <div className={classes.rightBox}>
                  <p className={classes.sectionTitle}>{data[1].metric2}</p>
                  <p>{data[1].value2}</p>
                  <p className={classes.sectionTitle}>{data[2].metric2}</p>
                  <p>{data[2].value2}</p>
                </div>
              </div>
            </div>
            <RefreshButton floating={true} color={'blue'}/>
          </div>
        </div>
      </Fragment>
    );
  }

export default SummaryWidget;
