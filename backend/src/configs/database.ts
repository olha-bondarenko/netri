import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    connect('mongodb+srv://olgaB:uwKO7xLf6PFrMzUm@olga.rm2mx.azure.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}