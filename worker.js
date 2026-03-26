export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Only redirect if no trailing slash and not a file (has no extension)
    if (!path.endsWith('/') && !path.includes('.')) {
      url.pathname = path + '/';
      return Response.redirect(url.toString(), 301);
    }

    return fetch(request);
  }
}