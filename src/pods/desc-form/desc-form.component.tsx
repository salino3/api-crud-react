import React from 'react';
import { useParams } from 'react-router-dom';

export const DescFormComponent: React.FC = () => {

  const params = useParams();

  console.log(params.id);
    
  return (
    <div>desc-form.component <br />
      {params?.id}
    </div>
  )
}
