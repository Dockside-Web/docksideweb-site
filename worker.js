export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let changed = false;

    // 1. Normalize WWW to Apex (e.g., www.docksideweb.com -> docksideweb.com)
    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.replace(/^www\./, '');
      changed = true;
    }

    const pathname = url.pathname;
    const isFile = pathname.includes('.');

    // 2. Trailing Slash Logic (e.g., /contact -> /contact/)
    // We skip this for files and the root index
    if (!isFile && !pathname.endsWith('/') && pathname !== '/') {
      url.pathname = pathname + '/';
      changed = true;
    }

    // If either condition triggered a change, perform a single 301 redirect
    if (changed) {
      return Response.redirect(url.toString(), 301);
    }

    // 3. Serve Assets if no redirect was needed
    return env.ASSETS.fetch(request);
  },
};