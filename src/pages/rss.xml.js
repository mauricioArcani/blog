import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Marcos Mauricio Arcani Garcia | Blog',
    description: 'Mi viaje a lo largo de aprender cosas de tecnología',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}