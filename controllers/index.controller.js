const home = (request, response) => {
    response.render('home');
}

const about = (request, response) => {
    response.render('about');
}

const contact = (request, response) => {
    response.render('contact');
}

const pricing = (request, response) => {
    response.render('pricing');
}
const faq = (request, response) => {
    response.render('faq');
}
const blogHome = (request, response) => {
    response.render('blogHome');
}
const blogPost = (request, response) => {
    response.render('blogPost');
}
const portfolioOverview = (request, response) => {
    response.render('portfolioOverview');
}
const portfolioItem = (request, response) => {
    response.render('portfolioItem');
}


module.exports = {
    home,
    about,
    contact,
    pricing,
    faq,
    blogHome,
    blogPost,
    portfolioOverview,
    portfolioItem
}