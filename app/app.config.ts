export default defineAppConfig({
  title: 'Kyte Links',
  email: 'growth@kyte.com.br',
  github: 'https://github.com/ivfarias',
  twitter: '',
  telegram: '',
  mastodon: '',
  blog: '',
  description: 'Create links and track the performance of your campaigns.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
