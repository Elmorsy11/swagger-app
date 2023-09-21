
'use client'
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
export default class page extends Component {
  render() {
    return (
      <main>
        <SwaggerUI url="/api/swagger" />

      </main>
    )
  }
}

