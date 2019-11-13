import React from 'react'
import ImageHelper from '../helpers/ImageHelper';


const ResultsWidget = ({data}) => {

  return (
    <section>
      <img src={ImageHelper.noImageFound} />
    </section>
  );
}


export default ResultsWidget;