export enum ROUTE {
  ANY = '*',
  HOME = '/',
  UPCOMING = '/wykopalisko',
  HITS = '/hity',
  MIKROBLOG = '/mikroblog',
  MY_WYKOP = '/moj',
  LINK = '/link/:id',
  ENTRY = '/wpis/:id',
  TAG = '/tag/:tag',
  PROFILE = '/ludzie/:username',
  LOGIN = '/zaloguj',
  LOGIN_CALLBACK = '/zaloguj/callback',
}
