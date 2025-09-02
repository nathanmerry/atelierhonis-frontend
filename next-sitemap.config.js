/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://atelierhonis.ro',
  // generateRobotsTxt: true, // (optional)
  // optional
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     'https://atelierhonis.ro/sitemap.xml',
  //   ],
  // },
  // Handle internationalization
  alternateRefs: [
    {
      href: 'https://atelierhonis.ro/en',
      hreflang: 'en',
    },
    {
      href: 'https://atelierhonis.ro/ro',
      hreflang: 'ro',
    },
  ],
  // Transform function to handle dynamic routes
  transform: async (config, path) => {
    // Handle locale-based routes
    if (path.includes('[locale]')) {
      return null; // Skip template files
    }
    
    // Handle dynamic ID routes
    if (path.includes('[id]')) {
      return null; // Skip template files - you'll need to add these manually or via additionalPaths
    }

    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  // Additional paths for your localized routes
  additionalPaths: async (config) => {
    const locales = ['en', 'ro'];
    const paths = [];
    
    // Add main pages for each locale
    const pages = [
      '',
      '/about-us',
      '/blogs',
      '/contact-us',
      '/custom-furniture',
      '/privacy-policy',
      '/terms-and-condition'
    ];
    
    locales.forEach(locale => {
      pages.forEach(page => {
        paths.push({
          loc: `/${locale}${page}`,
          changefreq: 'daily',
          priority: page === '' ? 1.0 : 0.7,
          lastmod: new Date().toISOString(),
        });
      });
    });

    // Fetch blog posts from API and add individual blog pages
    try {
      // Fetch all pages of blog posts
      let allBlogs = [];
      let currentPage = 1;
      let hasMorePages = true;

      while (hasMorePages) {
        const response = await fetch(`https://api.atelierhonis.ro/api/blogs?page=${currentPage}`);
        const blogData = await response.json();
        
        if (blogData && blogData.status && blogData.data && blogData.data.data) {
          allBlogs = [...allBlogs, ...blogData.data.data];
          hasMorePages = currentPage < blogData.data.last_page;
          currentPage++;
        } else {
          hasMorePages = false;
        }
      }

      console.log(`Found ${allBlogs.length} blog posts for sitemap`);
      
      if (allBlogs.length > 0) {
        locales.forEach(locale => {
          allBlogs.forEach(blog => {
            // Add individual blog detail pages
            paths.push({
              loc: `/${locale}/blog-detail/${blog.id}`,
              changefreq: 'weekly',
              priority: 0.6,
              lastmod: blog.updated_at || new Date().toISOString(),
            });
          });
        });
      }
    } catch (error) {
      console.warn('Failed to fetch blog posts for sitemap:', error.message);
      // Continue without blog posts if API is unavailable
    }
    
    return paths;
  },
  exclude: [
    '/404',
    '/_app',
    '/_document',
    '/[locale]/[id]', // Exclude dynamic routes template
  ],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
}
