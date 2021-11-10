import React, { useEffect, useState } from 'react';
import { getCategoryDetail } from '../api';
import { useParams } from 'react-router-dom';

const Detail = () => {

  let { id } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    getCategoryDetail(id)
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }, [id])

  return (
    <div>
      dd
    </div>
  )
}

export default Detail;