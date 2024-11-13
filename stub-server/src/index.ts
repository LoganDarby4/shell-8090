import * as path from 'path';

import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import { handleMe } from './routes/me.routes';
import { handleAdvisorsMy } from './routes/advisors-my.routes';
import { handleAccountsMy } from './routes/accounts-my.routes';
import { handleHoldingsMy } from './routes/holdings-my.routes';
import { handleDocuments } from './routes/documents';
import { handleTransactions } from './routes/transactions';
import { handleContributions } from './routes/contributions.routes';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(
  express.static(path.join(__dirname, '../../dist/investor-portal/browser')),
);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../../dist/investor-portal/browser'));

app.get('/health', (req, res) => res.json({ title: 'Healthy' }));
app.get('/api/v1/users', handleMe);
app.get('/api/v1/advisors', handleAdvisorsMy);
app.get('/api/v1/accounts', handleAccountsMy);
app.get('/api/v1/holdings', handleHoldingsMy);
app.post('/api/v1/documents/search', handleDocuments);
app.post('/api/v1/transactions', handleTransactions);
app.post('/api/v1/contributions', handleContributions);

app.get('/', function (req, res) {
  res.render('index.html');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err: any = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export { app };
