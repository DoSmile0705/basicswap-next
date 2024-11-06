import React from 'react';
import '../../../public/static/css/libs/flowbite.min.css';
import '../../../public/static/css/libs/tailwind.min.css';
import '../../../public/static/css/style.css';

const Header = () => {
  return (
    <header>
      <meta charSet="UTF-8" />
      <script src="/static/js/libs/chart.js"></script>
      <script src="/static/js/libs/chartjs-adapter-date-fns.bundle.min.js"></script>
      <script src="/static/js/main.js"></script>
      <script src="/static/js/libs/flowbite.js"></script>
      <script>
        {`
          const isDarkMode = localStorage.getItem('color-theme') === 'dark' ||
            (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

          if (!localStorage.getItem('color-theme')) {
            localStorage.setItem('color-theme', 'dark');
          }

          document.documentElement.classList.toggle('dark', isDarkMode);
        `}
      </script>
      <script>
        {`
          window.Components = {
            customSelect(options) {
              return {
                init() {
                  this.$refs.listbox.focus();
                  this.optionCount = this.$refs.listbox.children.length;
                  this.$watch('selected', value => {
                    if (!this.open) return;

                    if (this.selected === null) {
                      this.activeDescendant = '';
                      return;
                    }

                    this.activeDescendant = this.$refs.listbox.children[this.selected - 1].id;
                  });
                },
                activeDescendant: null,
                optionCount: null,
                open: false,
                selected: null,
                value: 1,
                choose(option) {
                  this.value = option;
                  this.open = false;
                },
                onButtonClick() {
                  if (this.open) return;
                  this.selected = this.value;
                  this.open = true;
                  this.$nextTick(() => {
                    this.$refs.listbox.focus();
                    this.$refs.listbox.children[this.selected - 1].scrollIntoView({ block: 'nearest' });
                  });
                },
                onOptionSelect() {
                  if (this.selected !== null) {
                    // Additional logic here
                  }
                }
              };
            }
          };
        `}
      </script>
    </header>
  );
};

export default Header;