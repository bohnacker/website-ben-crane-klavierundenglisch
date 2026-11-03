import { promises as fs } from 'fs';

const BASE_URL = 'https://www.klavierundenglisch.com';

const pages = [
	{ url: '/', file: 'src/routes/+page.svelte', priority: '1.0', changefreq: 'monthly' },
	{
		url: '/impressum',
		file: 'src/routes/impressum/+page.svelte',
		priority: '0.3',
		changefreq: 'yearly'
	}
];

async function generateSitemap() {
	const urls = await Promise.all(
		pages.map(async (page) => {
			try {
				const stats = await fs.stat(page.file);
				const lastmod = stats.mtime.toISOString().split('T')[0];

				return `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
			} catch (error) {
				const lastmod = new Date().toISOString().split('T')[0];
				return `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
			}
		})
	);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

	await fs.writeFile('static/sitemap.xml', sitemap);
	console.log('✅ Sitemap updated with current file modification dates');
}

generateSitemap().catch(console.error);
