
'use client'
import dynamic from 'next/dynamic';

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false })
import 'swagger-ui-react/swagger-ui.css';


const page = () => {
  return (
    <SwaggerUI url="/api/swagger" />
  )
}

export default page