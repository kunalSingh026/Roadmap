
    window.addEventListener('load', () => {
      const commandInput = document.querySelector('.command-input');
      if (commandInput) setTimeout(() => commandInput.focus(), 1000);
    });

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'j') {
        e.preventDefault();
        const commandInput = document.querySelector('.command-input');
        if (commandInput) commandInput.focus();
      }
    });

    document.querySelector('.generate-btn').addEventListener('click', () => {
      const input = document.querySelector('.command-input');
      if (input.value.trim()) {
        console.log('Generating response for:', input.value);
      }
    });

    document.querySelectorAll('.action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const input = document.querySelector('.command-input');
        const text = btn.textContent.trim();
        input.value = text.substring(2);
        input.focus();
      });
    });



    // login 
    
    document.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = document.querySelector('.submit-button');
      btn.textContent = 'Creating account...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Account Created!';
        btn.style.background = '#10b981';
        setTimeout(() => {
          btn.textContent = 'Create Account';
          btn.disabled = false;
          btn.style.background = '#a855f7';
        }, 2000);
      }, 1500);
    });
