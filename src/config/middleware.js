import morgan from 'morgan';
import bodyparser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';



export default app => {
    app.use(helmet());
    app.use(compression());
    app.use(morgan('dev'));
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded( {extended: true}) );
    console.log('hiihii');
}
