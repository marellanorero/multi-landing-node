const express = require('express');
const { home, about, contact, pricing, faq, blogHome, blogPost, portfolioOverview, portfolioItem  } = require('../controllers/index.controller');
const router = express.Router();

router.get('/', home);//tb puede ser post, este caso es get pq quiero que cargue mi página inicial | request accede a la info de parte del usuario con response 
router.get('/about', about);
router.get('/contact', contact);
router.get('/pricing', pricing);
router.get('/faq', faq);
router.get('/blog-home', blogHome);
router.get('/blog-post', blogPost);
router.get('/portfolio-overview', portfolioOverview);
router.get('/portfolio-item', portfolioItem);



module.exports = router;