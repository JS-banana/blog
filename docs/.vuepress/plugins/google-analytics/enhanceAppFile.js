/* global GA_ID, ga */

export default ({ router }) => {
  // Google analytics integration
  if (/*process.env.NODE_ENV === 'production' &&*/ GA_ID && typeof window !== 'undefined') {
    (function(i, s, o, g, r, a, m, l) {
      i['GoogleAnalyticsObject'] = r;
      i[r] =
        i[r] ||
        function() {
          (i[r].q = i[r].q || []).push(arguments);
        };
      i[r].l = 1 * new Date();
      a = s.createElement(o);
      a.async = 1;
      a.src = g;

      m = s.getElementsByTagName(o)[0];
      l = s.createElement(o);
      l.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-SCDEY8WH2K');
      `;
      m.parentNode.insertBefore(l, m);
      m.parentNode.insertBefore(a, m);
    })(window, document, 'script', `https://www.googletagmanager.com/gtag/js?id=G-${GA_ID}`, 'ga');

    ga('create', GA_ID, 'auto');
    ga('set', 'anonymizeIp', true);

    router.afterEach(function(to) {
      ga('set', 'page', router.app.$withBase(to.fullPath));
      ga('send', 'pageview');
    });
  }
};
