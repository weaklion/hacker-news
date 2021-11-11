import React, { useEffect, useState } from 'react';
import { getCategoryDetail } from '../api';
import Skeleton from '@mui/material/Skeleton';

const Detail = ({id}) => {

  const [detail, setDetail] = useState();

  useEffect(() => {
    getCategoryDetail(id)
    .then( res => setDetail(res))
    .catch( error => console.error(error))
  }, [id]);

  const converTime = (time) => {
    const date = new Date(time);

    return (date.getDate()+
    "/"+(date.getMonth()+1)+
    "/"+date.getFullYear()+
    " "+date.getHours()+
    ":"+date.getMinutes()+
    ":"+date.getSeconds()) ;
  }

  return (
    <div>
      {!detail ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <>
          <div> 제목 : {detail.title}</div>
          <div> 타입 : {detail.type}</div>
          <div> url : {detail.url}</div>
          <div> 시간 : {converTime(detail.time)}</div>
          <div> 점수 : {detail.score}</div>
          <div> id : {detail.id}</div>
          <div> by : {detail.by}</div>
          <div> kids : {detail.kids.join(',')}</div>
        </>
      )}
    </div>
  )
}

export default Detail;