import createMiddleware from 'next-intl/middleware';
import { i18n } from './i18n.config';

export default createMiddleware({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
  localePrefix: 'as-needed',
});

export const config = {
  matcher: [
    '/',
    '/(en|es|fr|de|hi|ta|te|kn|ml|ha|yo|ig|ff|sw|ki|lu|lo|am|om|ti|so|lg|nyn|ach|ak|ee|gaa|dag|zu|xh|af|nso|tn|st|ts|ss|ve|nr|ar|nu)/:path*',
  ],
};