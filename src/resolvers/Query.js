const Query = {
    users(parent, args, { db }, info) {
        if(!args.query) {
            return db.users;
        }

        return db.users.filter((user => {
            return user.name.toLowerCase().includes(args.query.toLowerCase());
        }));
        
    },
    posts(parent, args, { db }, info) {
        if (!args.query) {
            return db.posts;
        }
        return db.posts.filter((post => {
            const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
            const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
            return isTitleMatch || isBodyMatch;
        }));
    },
    
    comments(parent, args, { db }, info) {
        return db.comments;
    },
    me() {
        return {
            id: '12345098',
            name: 'David',
            email: 'david@email.com',
            age: 47
        }
    },
    post() {
        return {
            id: '9876123',
            title: 'The best blog post ever',
            body: 'Have you ever seen the best blog post ever?  Well, I guarantee, you have now because THIS. IS. IT.  Oh yes, you are welcome.',
            published: false
        }
    }
}

export { Query as default }