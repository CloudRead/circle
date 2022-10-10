import React from 'react';
import Icon from '@ant-design/icons';

export default function (props: any) {
  return (
    <Icon
      {...props}
      component={() => (
        <svg
          viewBox="0 0 1024 1024"
          focusable="false"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M276.12 433.296l140.822-113.311-48.607-36.476-1.12 0.9-88.071-72.114-45.423 34.683 89.221 73.055-95.43 76.787 48.609 36.476zM890.517 22.863h-757.72C63.142 22.863 6.506 79.5 6.506 149.148v599.866c0 69.648 56.637 126.285 126.288 126.285H498.49l148.703 117.038a31.484 31.484 0 0 0 22.322 9.25 31.468 31.468 0 0 0 22.32-9.25c12.336-12.333 12.336-32.311 0-44.64l-157.95-126.291a31.551 31.551 0 0 0-22.321-9.25H132.795c-34.807 0-63.144-28.336-63.144-63.142V149.148c0-34.806 28.337-63.142 63.144-63.142h757.722c34.808 0 63.143 28.336 63.143 63.142v599.866c0 34.807-28.335 63.142-63.143 63.142H764.54c-17.453 0-31.572 14.123-31.572 31.571 0 17.449 14.12 31.571 31.572 31.571h125.976c69.65 0 126.287-56.637 126.287-126.285V149.148c0.001-69.648-56.636-126.285-126.287-126.285z m-94.712 284.146c0-34.873-28.27-63.142-63.144-63.142-34.873 0-63.144 28.269-63.144 63.142 0 34.874 28.27 63.145 63.144 63.145 34.874 0 63.144-28.271 63.144-63.145zM526.195 685.871c197.213 0 262.12-146.27 264.616-153.463 4.993-11.991-2.497-26.378-14.978-31.174-12.481-4.796-27.462 2.396-32.453 14.387-2.496 4.797-52.424 122.292-217.185 122.292-169.753 0-212.192-117.496-214.687-122.292-4.994-11.99-19.972-19.182-32.453-14.387-12.482 4.795-19.972 19.183-14.979 31.174 0 4.794 54.922 153.463 262.12 153.463z" />
        </svg>
      )}
    />
  );
}
