import React, { Fragment } from 'react';
import loading from '../../image/logo/loading.gif'

const Loading = () => {
  return (
    <Fragment>
      <div className='text-center'>
      <img width={600} src={loading} alt="" />
      </div>
    </Fragment>
  );
};

export default Loading;