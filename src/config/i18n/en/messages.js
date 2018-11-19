/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function(n, ord) {
      var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
      if (ord)
        return n10 == 1 && n100 != 11
          ? 'one'
          : n10 == 2 && n100 != 12
            ? 'two'
            : n10 == 3 && n100 != 13
              ? 'few'
              : 'other';
      return n == 1 && v0 ? 'one' : 'other';
    },
  },
  messages: {
    'common.close': 'Close',
    'footer.legal.cookies': 'Cookies',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms & Conditions',
    'home.about.description':
      'Coding Coach is a free, open-source platform which aims to connect software developers and mentors all over the world.  It is built by a group of talented and passionate developers, designers, engineers, and humans who want to make the engineering world a better place to collaborate.  This project was born out of a desire to provide a platform to connect mentors and mentees throughout the world at no cost.  Coding Coach is created by the people, for the people.',
    'home.about.img': 'Man walking into a laptop',
    'home.about.title': 'About',
    'home.contact.description': function(a) {
      return [
        'We want to hear your thoughts! Feel free to join our <0>Slack Organization</0> or send us an email at <1>',
        a('EMAIL'),
        '</1>',
      ];
    },
    'home.contact.img': 'Person using a magnifying glass to see the details of another guy.',
    'home.contact.title': 'Contact',
    'home.header.cta': 'Learn More',
    'home.header.logo': 'This is the logo for Coding Coach',
    'home.mission.description':
      'We believe that mentorship should be accessible to all people regardless of location or financial standing. In pursuit of this goal we will provide a free and open source platform to facilitate mentorship connections. Our mission is to foster a greater sense of collaboration and inclusiveness in the technical industry by providing a platform to aid the mentorship process.',
    'home.mission.img': 'Group of people',
    'home.mission.title': 'Mission',
    'legal.notification':
      'To help personalize content, tailor and measure ads, and provide a safer experience, we use cookies. By clicking or navigating the site, you agree to allow our collecion of information on and off Coding Coach through cookies. Learn more, including about available controls: <0><1>Cookies Policy</1></0>',
    'site.slogan': 'Connecting developers with mentors worldwide',
    'site.title': 'Coding Coach',
  },
};