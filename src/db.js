//Demo user data
const users = [
    {
        id: '1',
        name: 'David',
        email: 'david@email.com',
        age: 47
    },
    {
        id: '2',
        name: 'Horton',
        email: 'horton@email.com'
    },
    {
        id: '3',
        name: 'Sarah',
        email: 'sarah@email.com',
        age: 34   
    }
];

const posts = [
    {
        id: '11',
        title: 'Post 01 - Getting Started',
        body: 'This post will get you started.',
        published: true,
        author: '1'
    },
    {
        id: '12',
        title: 'Post 02 - Adding Stuff',
        body: 'This post will show you how to add stuff.',
        published: true,
        author: '1'
    },
    {
        id: '13',
        title: 'Post 03 - Getting Advanced',
        body: 'This post will show you how to do advanced stuff.',
        published: false,
        author: '3'
    }     
];

const comments = [
    {
        id: '101',
        text: 'This is a great article. Thanks!',
        author: '1',
        post: '11'
    },
    {
        id: '102',
        text: 'I learned so much following this blog post.',
        author: '1',
        post: '12'
    },
    {
        id: '103',
        text: 'Can you explain how this relates to DB data retrievals?',
        author: '2',
        post: '11'
    },
    {
        id: '104',
        text: 'This was perfect.  We set it up this way on my project.',
        author: '3',
        post: '13'
    }

];

const db = {
    users,
    posts,
    comments
}

export { db as default }