export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // 1. Check if it's a file (like .jpg, .css, .js) - don't add slash to these!
    const isFile = pathname.includes('.');

    // 2. If it's NOT a file and DOES NOT have a trailing slash, 301 redirect
    if (!isFile && !pathname.endsWith('/') && pathname !== '') {
      const newUrl = new URL(request.url);
      newUrl.pathname = pathname + '/';
      
      return Response.redirect(newUrl.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};