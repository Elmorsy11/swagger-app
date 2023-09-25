const { NextResponse } = require("next/server")
import SwaggerDocs from '../../../swagger.json'
export const GET = async () => {
    try {
        return new NextResponse(JSON.stringify(SwaggerDocs))
    } catch (error) {
        return new NextResponse({})
    }
}
