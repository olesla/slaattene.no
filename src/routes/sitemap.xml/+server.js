export async function GET() {
	return new Response(
		`
	<?xml version="1.0" encoding="UTF-8" ?>
	<urlset
		xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:xhtml="https://www.w3.org/1999/xhtml"
		xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
		xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
		xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
		xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	>
		<url>
			<loc>https://slaattene.no/</loc>
			<changefreq>daily</changefreq>
			<priority>0.7</priority>
		</url>
		<url>
			<loc>https://slaattene.no/forbered-begravelse/</loc>
			<changefreq>daily</changefreq>
			<priority>0.7</priority>
		</url>
		<url>
			<loc>https://slaattene.no/gravferdsmonumenter/</loc>
			<changefreq>daily</changefreq>
			<priority>0.7</priority>
		</url>
		<url>
			<loc>https://slaattene.no/hjelp-ved-dødsfall/</loc>
			<changefreq>daily</changefreq>
			<priority>0.7</priority>
		</url>
		<url>
			<loc>https://slaattene.no/hva-koster-en-begravelse/</loc>
			<changefreq>daily</changefreq>
			<priority>0.7</priority>
		</url>
		<url>
			<loc>https://slaattene.no/seremoni/</loc>
			<changefreq>daily</changefreq>
			<priority>0.7</priority>
		</url>
		<url>
			<loc>https://slaattene.no/valg-av-kiste/</loc>
			<changefreq>daily</changefreq>
			<priority>0.7</priority>
		</url>
		<url>
			<loc>https://slaattene.no/priser-etter-opplysningsplikt/</loc>
			<changefreq>daily</changefreq>
			<priority>0.7</priority>
		</url>
	</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
