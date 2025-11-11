const ACTIVE_COLOR = 'green', DEFAULT_COLOR = '#fff';
const buttons = document.querySelectorAll('.ChCh');

buttons.forEach(b => b.addEventListener('click', function() {
  buttons.forEach(btn => Object.assign(btn.style, {
    backgroundColor: DEFAULT_COLOR,
    borderRadius: '0px',
    padding: '0px'
  }));
  Object.assign(this.style, {
    backgroundColor: ACTIVE_COLOR,
    borderRadius: '5px',
    padding: '8px'
  });
}));
