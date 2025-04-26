import { http, HttpResponse } from 'msw';

export const signinHandler = [
    http.post('/api/signup', () => {
        console.log('Captured a "POST /posts" request');
    }),
    http.get('https://api.classbon.com/api/blog/newest/4', () => {
        return HttpResponse.json([]);
    }),
    http.get('https://api.classbon.com/api/courses/newest/4', () => {
        return HttpResponse.json([]);
    }),
];

