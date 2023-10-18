import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as morgan from 'morgan';
import * as session from 'express-session';
import * as mySqlSession from 'express-mysql-session';
import { localData } from './middlewares/localsData';
import * as dotenv from 'dotenv';

dotenv.config()
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const corsOptions={
    origin: ['http://localhost:4200']
  };
  app.enableCors(corsOptions);
  app.use(helmet());
  app.use(morgan('dev'));
  // Ajout du pipe de validation de façon globale
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true
  }));
  // je définis l'endroit où seront stockées les vues
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  // Ajout d'un dossier public pour partager les assets
  app.useStaticAssets(join(__dirname, "..", "public"))
  // J'informe qu'ejs sera utilisé comme moteur de template
  app.setViewEngine("ejs");

  const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'nest_budget_dream'
  }
  const MySQLStore = mySqlSession(session);
  const store = new MySQLStore(options);
  // utilisation de la session
  app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
      store: store
    }),
  );
  // utilisation de middleware
  app.use(localData);

  await app.listen(process.env.APP_PORT);
}
bootstrap();
