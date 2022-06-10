import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from './pages/coaches/CoachesDetails';
import CoachList from './pages/coaches/CoachesList';
import CoachRegistration from './pages/coaches/CoachesRegistration';
import ContactCoach from './pages/requests/ContactCoach';
import RequestReceived from './pages/requests/RequestReceived';
import NotFound from './pages/NotFound';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachList},
        {
            path: '/coaches/:id',
            component: CoachDetail,
            children: [
                { path: 'contact', component: ContactCoach}, // coaches/c1/contact
            ]},
        { path: '/register', component: CoachRegistration},
        { path: '/requests', component: RequestReceived},
        { path: '/:notFound(.*)', component: NotFound},
    ],
});

export default router;