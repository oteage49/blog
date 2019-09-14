module.exports = {
  title: 'なんか面白いことない？',
  description: '',
  dest: 'docs/',
  base: '/blog/',
  mode: 'production',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  // オフライン参照
  serviceWorker: true,
  head: [
      ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
  themeConfig: {
    nav: [
      { text: 'TOP', link: '/' },
      { text: 'Profile', link: '/profile.md' },
      { text: 'Twitter', link: 'https://twitter.com/oteage49' },
      { text: 'GitHub', link: 'https://github.com/oteage49' }
    ],
    sidebar: 'auto'
  }
}