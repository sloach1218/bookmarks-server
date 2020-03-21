function makeBookmarksArray() {
    return [
        { id: 1,
          title: 'Stack Overflow',
          url: 'https://stackoverflow.com/',
          description: 'For developers, by developers',
          rating: "5" },
        { id: 2,
          title: 'React',
          url: 'https://reactjs.org/',
          description: 'A JavaScript library for building user interfaces',
          rating: "4" },
        { id: 3,
          title: 'Google',
          url: 'https://google.com/',
          description: 'Knows all',
          rating: "5" }];
  }
  
  module.exports = {
    makeBookmarksArray,
  }