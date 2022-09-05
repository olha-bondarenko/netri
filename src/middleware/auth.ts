import jwt from 'jsonwebtoken';

interface JwtPayload {
    id: string
  }

const auth = async (req: any, res: any, next: any) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;
            req.userId = decodedData.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData!.sub;
        }
        next();
    } catch (error) {
        console.log(error)
    }
}

export default auth;