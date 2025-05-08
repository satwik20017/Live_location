import 'express-session';

declare module 'express-session' {
  interface SessionData {
    user?: any; // Replace `any` with your actual user type if you have one
  }
}
