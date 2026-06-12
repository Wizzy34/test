export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)
    const pathname = url.pathname

    // For all routes, serve index.html
    // React Router will handle client-side routing
    try {
      const response = await fetch(new URL('/index.html', request.url))
      return new Response(response.body, {
        headers: {
          'Content-Type': 'text/html',
          'Cache-Control': 'public, max-age=3600',
        },
      })
    } catch (error) {
      return new Response('Error loading site', { status: 500 })
    }
  },
}
