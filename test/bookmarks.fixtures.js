function makeBookmarksArray() {
    return [
        { id: 1,
          title: 'Stack Overflow',
          url: 'https://stackoverflow.com/',
          description: 'For developers, by developers',
          rating: 5 },
        { id: 2,
          title: 'React',
          url: 'https://reactjs.org/',
          description: 'A JavaScript library for building user interfaces',
          rating: 4 },
        { id: 3,
          title: 'Google',
          url: 'https://google.com/',
          description: 'Knows all',
          rating: 5 }];
  }
  function makeMaliciousBookmark() {
    const maliciousBookmark = {
      id: 911,
      title: 'Naughty naughty very naughty <script>alert("xss");</script>',
      url: 'https://www.hackers.com',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
      rating: 1,
    }
    const expectedBookmark = {
      ...maliciousBookmark,
      title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
      maliciousBookmark,
      expectedBookmark,
    }
  }
  
  module.exports = {
    makeBookmarksArray, makeMaliciousBookmark
  }