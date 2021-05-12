var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/LonnonDev/SvelteTesting.git', // Update to point to your repository
        user: {
            name: 'LonnonjamesD', // update to use your name
            email: 'xxl3m0nk1ngxx@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)