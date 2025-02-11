import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section className="overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:items-center pt-24 pb-12 -mx-4">
            <div className="w-full md:w-3/4 px-4">
              <a className="block mb-8 max-w-max" href="/">
                <img src="/static/images/logos/basicswap-logo.svg" className="h-8 imageshow dark-image" alt="BasicSwap Logo" />
                <img src="/static/images/logos/basicswap-logo-dark.svg" className="h-8 imageshow light-image" alt="BasicSwap Logo Dark" />
              </a>
              <div className="mb-12 md:mb-0 flex flex-wrap -mx-3 md:-mx-6">
                <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                  <a className="inline-block text-coolGray-500 dark:text-gray-300 font-medium" href="https://academy.particl.io/en/latest/basicswap-dex/basicswap_explained.html" target="_blank" rel="noopener noreferrer">BasicSwap Explained</a>
                </div>
                <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                  <a className="inline-block text-coolGray-500 dark:text-gray-300 font-medium" href="https://academy.particl.io/en/latest/basicswap-guides/basicswapguides_installation.html" target="_blank" rel="noopener noreferrer">Tutorials and Guides</a>
                </div>
                <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                  <a className="inline-block text-coolGray-500 dark:text-gray-300 font-medium" href="https://academy.particl.io/en/latest/faq/get_support.html" target="_blank" rel="noopener noreferrer">Get Support</a>
                </div>
                <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                  <a className="inline-block text-coolGray-500 dark:text-gray-300 font-medium" href="https://basicswapdex.com/terms" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4"></div>
          </div>
        </div>
        <div className="border-b border-gray-100 dark:border-gray-500 dark:bg-body dark:border-b-2"></div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center py-12 md:pb-32">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="flex items-center">
                  <p className="text-sm text-gray-90 dark:text-white font-medium">© 2024~ (BSX) BasicSwap</p>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 dark:bg-white rounded-full"></span>
                  <p className="text-sm text-coolGray-400 font-medium">BSX:0.0.0.1</p>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 dark:bg-white rounded-full"></span>
                  <p className="text-sm text-coolGray-400 font-medium">GUI: v3.1.0</p>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 dark:bg-white rounded-full"></span>
                  <p className="mr-2 text-sm font-bold dark:text-white text-gray-90">Made with </p>
                  {/* <span dangerouslySetInnerHTML={{ __html: '{{ love_svg | safe }}' }} /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24">
                    <g stroke-linecap="round" stroke-width="2" fill="none" stroke="#f80b0b" stroke-linejoin="round">
                      <path d="M21.243,3.757 c-2.343-2.343-6.142-2.343-8.485,0c-0.289,0.289-0.54,0.6-0.757,0.927c-0.217-0.327-0.469-0.639-0.757-0.927 c-2.343-2.343-6.142-2.343-8.485,0c-2.343,2.343-2.343,6.142,0,8.485L12,21.485l9.243-9.243C23.586,9.899,23.586,6.1,21.243,3.757z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-wrap md:justify-end -mx-5">
                <div className="px-5">
                  <a className="inline-block text-coolGray-300 hover:text-coolGray-400" href="https://github.com/basicswap/basicswap" target="_blank" rel="noopener noreferrer">
                    {/* <span dangerouslySetInnerHTML={{ __html: '{{ github_svg | safe }}' }} /> */}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 0C4.0275 0 0 4.13211 0 9.22838C0 13.3065 2.5785 16.7648 6.15375 17.9841C6.60375 18.0709 6.76875 17.7853 6.76875 17.5403C6.76875 17.3212 6.76125 16.7405 6.7575 15.9712C4.254 16.5277 3.726 14.7332 3.726 14.7332C3.3165 13.6681 2.72475 13.3832 2.72475 13.3832C1.9095 12.8111 2.78775 12.8229 2.78775 12.8229C3.6915 12.887 4.16625 13.7737 4.16625 13.7737C4.96875 15.1847 6.273 14.777 6.7875 14.5414C6.8685 13.9443 7.10025 13.5381 7.3575 13.3073C5.35875 13.0764 3.258 12.2829 3.258 8.74709C3.258 7.73988 3.60675 6.91659 4.18425 6.27095C4.083 6.03774 3.77925 5.0994 4.263 3.82846C4.263 3.82846 5.01675 3.58116 6.738 4.77462C7.458 4.56958 8.223 4.46785 8.988 4.46315C9.753 4.46785 10.518 4.56958 11.238 4.77462C12.948 3.58116 13.7017 3.82846 13.7017 3.82846C14.1855 5.0994 13.8818 6.03774 13.7917 6.27095C14.3655 6.91659 14.7142 7.73988 14.7142 8.74709C14.7142 12.2923 12.6105 13.0725 10.608 13.2995C10.923 13.5765 11.2155 14.1423 11.2155 15.0071C11.2155 16.242 11.2043 17.2344 11.2043 17.5341C11.2043 17.7759 11.3617 18.0647 11.823 17.9723C15.4237 16.7609 18 13.3002 18 9.22838C18 4.13211 13.9703 0 9 0Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script>
        {`
          var toggleImages = function() {
            var html = document.querySelector('html');
            var darkImages = document.querySelectorAll('.dark-image');
            var lightImages = document.querySelectorAll('.light-image');

            if (html && html.classList.contains('dark')) {
              toggleImageDisplay(darkImages, 'block');
              toggleImageDisplay(lightImages, 'none');
            } else {
              toggleImageDisplay(darkImages, 'none');
              toggleImageDisplay(lightImages, 'block');
            }
          };

          var toggleImageDisplay = function(images, display) {
            images.forEach(function(img) {
              img.style.display = display;
            });
          };

          document.addEventListener('DOMContentLoaded', function() {
            var themeToggle = document.getElementById('theme-toggle');

            if (themeToggle) {
              themeToggle.addEventListener('click', function() {
                toggleImages();
              });
            }

            toggleImages();
          });
        `}
      </script>
      <script>
        {`
          var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
          var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

          if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
          } else {
            themeToggleDarkIcon.classList.remove('hidden');
          }

          function setTheme(theme) {
            if (theme === 'light') {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
            } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
            }
          }

          document.getElementById('theme-toggle').addEventListener('click', () => {
            if (localStorage.getItem('color-theme') === 'dark') {
              setTheme('light');
            } else {
              setTheme('dark');
            }
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');
            toggleImages();
          });
        `}
      </script>
    </footer>
  );
};

export default Footer;