module.exports = {
  title: 'IoT Applications',
  description: 'IoT Applications course for the VIVES elektronics and ICT',
  dest: 'dist',
  plugins: [
    ['vuepress-plugin-zooming'],
    [
      // includes all files in `sourceDir`
      // ignore dotfiles and markdown
      'vuepress-plugin-public-files', {
        from: 'files',
        to: 'files',
      }
    ],
    ['vuepress-plugin-container', {
      type: 'quote',
      defaultTitle: '',
    }],
    ['vuepress-plugin-container', {
      type: 'right',
      defaultTitle: '',
    }],
    ['vuepress-plugin-container', {
      type: 'tip',
      defaultTitle: 'TIP',
    }],
    ['vuepress-plugin-container', {
      type: 'warning',
      defaultTitle: 'WARNING',
    }],
    ['vuepress-plugin-container', {
      type: 'danger',
      defaultTitle: 'WARNING',
    }],
    ['vuepress-plugin-container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n'
    }],
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Toledo', link: 'https://p.cygnus.cc.kuleuven.be/webapps/tol-web-rs-bb-bb_bb60/goto_lu.do?batchUid=B-VIVN-B5N039-2021&entityId=urn%3Amace%3Akuleuven.be%3Akulassoc%3Akuleuven.be' },
      { text: 'Blackboard Collaborate', link: 'https://p.cygnus.cc.kuleuven.be/webapps/blackboard/content/launchLink.jsp?course_id=_974521_1&tool_id=_5163_1&tool_type=TOOL&mode=cpview&mode=reset' },
      { text: 'ECTS', link: 'https://p.cygnus.cc.kuleuven.be/webapps/tol-ECTS-bb_bb60/public/display?button_id=338029f4-47f6-4f27-b476-6b642a1b0fb3' }
    ],
    repo: 'sillevl/course-iot-applications',
    docsDir: 'src',
    docsBranch: 'master',
    sidebarDepth: 1,
    sidebar: [
      {
        title: 'The IoT Model',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
          '/chapters/01_iot-model/'
        ]
      },
      {
        title: 'Docker',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
          '/chapters/02_docker/01_introduction/',
          '/chapters/02_docker/02_containers/',
          '/chapters/02_docker/03_running-containers/',
          '/chapters/02_docker/04_building-images/',
          '/chapters/02_docker/05_docker-compose/',
        ]
      },
      {
        title: 'Frontend with Vue.js',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
        ]
      },
      {
        title: 'Backend with Express',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
        ]
      },
      {
        title: 'Data persistence',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
        ]
      },
      {
        title: 'Reverse proxy',   // required
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0,    // optional, defaults to 1
        children: [
        ]
      },
    ]
  },
}