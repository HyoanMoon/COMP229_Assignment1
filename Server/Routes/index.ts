import express from 'express';
const router = express.Router();

/* Display home page. */
router.get('/', function(req: express.Request, res: express.Response , next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page: 'home'});
});
/* Display home page. */
router.get('/home', function(req: express.Request, res: express.Response , next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page: 'home'});
});
/* Display about page. */
router.get('/about', function(req: express.Request, res: express.Response , next: express.NextFunction) 
{
  res.render('index', { title: 'About Me', page: 'about'});
});

/* Display project page. */
router.get('/projects', function(req: express.Request, res: express.Response , next: express.NextFunction) 
{
  res.render('index', { title: 'My Projects', page: 'projects'});
});

/* Display services page. */
router.get('/services', function(req: express.Request, res: express.Response , next: express.NextFunction) 
{
  res.render('index', { title: 'Services', page: 'services'});
});

/* Display contact page. */
router.get('/contact', function(req: express.Request, res: express.Response , next: express.NextFunction) 
{
  res.render('index', { title: 'Contact', page: 'contact'});
});


export default router;
