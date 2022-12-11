export const ROUTES = {
    auth: {
        path: '/auth',
        login: '/auth/login',
        register: '/auth/register'
    },
    main: {
        path: '/',
        notFound: '/404',
        home: '/',
        profile: {
            index: '/profile',
            details: '/profile/:id'
        },
        messages: '/my-messages',
        account: '/my-account',
        favorites: '/my-favorites'
    },
}
