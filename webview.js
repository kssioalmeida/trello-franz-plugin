const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {

    const updates = document.getElementById('franz').getAttribute('data-unread');
    const inbox = document.getElementById('franz').getAttribute('data-inbox');
    Franz.setBadge(updates, inbox);
    
  };

  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));

  Franz.loop(getMessages);
};
