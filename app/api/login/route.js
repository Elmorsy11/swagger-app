
const { NextResponse } = require("next/server")


const users = [
    {
        username: "userOne", password
            : "123456"
    }
    , {
        username: "userTwo", password
            : "12345"
    }
]



export const POST = async (req) => {
    try {
        const data = await req.json();

        let { username, password } = data;
        const usersData = users.find((user) => user.username === username)

        if (usersData?.username === username && usersData?.password === password) {
            return new NextResponse(JSON.stringify({ message: 'You Are logged in successfully' }), {
                status: 200, // Set the appropriate status code
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // toast.success('You Are logged in successfully')
        } else {
            // toast.error('username or password incorrect')
            return new NextResponse(JSON.stringify({ message: 'username or password incorrect' }), {
                status: 404, // Internal Server Error
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

    } catch (error) {
        // Handle any errors
        console.error(error);

        // Return an error response
        return new NextResponse(JSON.stringify({ error: "An error occurred" }), {
            status: 500, // Internal Server Error
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
};