import { REACT_LOADABLE_MANIFEST } from "next/dist/shared/lib/constants";

// PROFILE ICON
export const Profile = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 15C1 13.9391 1.42143 12.9217 2.17157 12.1716C2.92172 11.4214 3.93913 11 5 11H13C14.0609 11 15.0783 11.4214 15.8284 12.1716C16.5786 12.9217 17 13.9391 17 15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15Z"
      stroke="#C4CFDE"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M9 7C10.6569 7 12 5.65685 12 4C12 2.34315 10.6569 1 9 1C7.34315 1 6 2.34315 6 4C6 5.65685 7.34315 7 9 7Z"
      stroke="#C4CFDE"
      strokeWidth="2"
    />
  </svg>
);

// FACEBOOK ICON
export const Fackbook = () => (
  <svg
    width="13"
    height="22"
    viewBox="0 0 13 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

// INSTAGRAM ICON
export const Instagram = () => (
  <svg
    width="18"
    height="22"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1152_27)">
      <path
        d="M8 0C5.829 0 5.556 0.01 4.703 0.048C3.85 0.088 3.269 0.222 2.76 0.42C2.22584 0.620326 1.74214 0.935398 1.343 1.343C0.935398 1.74214 0.620326 2.22584 0.42 2.76C0.222 3.268 0.087 3.85 0.048 4.7C0.01 5.555 0 5.827 0 8.001C0 10.173 0.01 10.445 0.048 11.298C0.088 12.15 0.222 12.731 0.42 13.24C0.625 13.766 0.898 14.212 1.343 14.657C1.787 15.102 2.233 15.376 2.759 15.58C3.269 15.778 3.849 15.913 4.701 15.952C5.555 15.99 5.827 16 8 16C10.173 16 10.444 15.99 11.298 15.952C12.149 15.912 12.732 15.778 13.241 15.58C13.7748 15.3795 14.2581 15.0645 14.657 14.657C15.102 14.212 15.375 13.766 15.58 13.24C15.777 12.731 15.912 12.15 15.952 11.298C15.99 10.445 16 10.173 16 8C16 5.827 15.99 5.555 15.952 4.701C15.912 3.85 15.777 3.268 15.58 2.76C15.3797 2.22584 15.0646 1.74214 14.657 1.343C14.2579 0.935398 13.7742 0.620326 13.24 0.42C12.73 0.222 12.148 0.087 11.297 0.048C10.443 0.01 10.172 0 7.998 0H8ZM7.283 1.442H8.001C10.137 1.442 10.39 1.449 11.233 1.488C12.013 1.523 12.437 1.654 12.719 1.763C13.092 1.908 13.359 2.082 13.639 2.362C13.919 2.642 14.092 2.908 14.237 3.282C14.347 3.563 14.477 3.987 14.512 4.767C14.551 5.61 14.559 5.863 14.559 7.998C14.559 10.133 14.551 10.387 14.512 11.23C14.477 12.01 14.346 12.433 14.237 12.715C14.1078 13.0619 13.9032 13.3758 13.638 13.634C13.358 13.914 13.092 14.087 12.718 14.232C12.438 14.342 12.014 14.472 11.233 14.508C10.39 14.546 10.137 14.555 8.001 14.555C5.865 14.555 5.611 14.546 4.768 14.508C3.988 14.472 3.565 14.342 3.283 14.232C2.93583 14.1033 2.6216 13.899 2.363 13.634C2.09727 13.3756 1.89233 13.0614 1.763 12.714C1.654 12.433 1.523 12.009 1.488 11.229C1.45 10.386 1.442 10.133 1.442 7.996C1.442 5.859 1.45 5.608 1.488 4.765C1.524 3.985 1.654 3.561 1.764 3.279C1.909 2.906 2.083 2.639 2.363 2.359C2.643 2.079 2.909 1.906 3.283 1.761C3.565 1.651 3.988 1.521 4.768 1.485C5.506 1.451 5.792 1.441 7.283 1.44V1.442ZM12.271 2.77C12.1449 2.77 12.0201 2.79483 11.9036 2.84308C11.7872 2.89132 11.6813 2.96203 11.5922 3.05118C11.503 3.14032 11.4323 3.24615 11.3841 3.36262C11.3358 3.4791 11.311 3.60393 11.311 3.73C11.311 3.85607 11.3358 3.9809 11.3841 4.09738C11.4323 4.21385 11.503 4.31968 11.5922 4.40882C11.6813 4.49797 11.7872 4.56868 11.9036 4.61692C12.0201 4.66517 12.1449 4.69 12.271 4.69C12.5256 4.69 12.7698 4.58886 12.9498 4.40882C13.1299 4.22879 13.231 3.98461 13.231 3.73C13.231 3.47539 13.1299 3.23121 12.9498 3.05118C12.7698 2.87114 12.5256 2.77 12.271 2.77ZM8.001 3.892C7.45607 3.8835 6.91489 3.98349 6.40898 4.18614C5.90306 4.3888 5.44251 4.69007 5.05415 5.07242C4.66579 5.45478 4.35736 5.91057 4.14684 6.41326C3.93632 6.91595 3.8279 7.4555 3.8279 8.0005C3.8279 8.5455 3.93632 9.08505 4.14684 9.58774C4.35736 10.0904 4.66579 10.5462 5.05415 10.9286C5.44251 11.3109 5.90306 11.6122 6.40898 11.8149C6.91489 12.0175 7.45607 12.1175 8.001 12.109C9.07954 12.0922 10.1082 11.6519 10.865 10.8833C11.6217 10.1146 12.0459 9.07917 12.0459 8.0005C12.0459 6.92183 11.6217 5.88641 10.865 5.11775C10.1082 4.34909 9.07954 3.90883 8.001 3.892ZM8.001 5.333C8.35124 5.333 8.69804 5.40198 9.02162 5.53601C9.34519 5.67004 9.6392 5.86649 9.88685 6.11415C10.1345 6.3618 10.331 6.65581 10.465 6.97938C10.599 7.30296 10.668 7.64976 10.668 8C10.668 8.35023 10.599 8.69704 10.465 9.02062C10.331 9.34419 10.1345 9.6382 9.88685 9.88585C9.6392 10.1335 9.34519 10.33 9.02162 10.464C8.69804 10.598 8.35124 10.667 8.001 10.667C7.29367 10.667 6.61531 10.386 6.11515 9.88585C5.61499 9.38569 5.334 8.70733 5.334 8C5.334 7.29267 5.61499 6.61431 6.11515 6.11415C6.61531 5.61399 7.29367 5.333 8.001 5.333Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1152_27">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// X ICON
export const Twitter = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1152_18)">
      <mask
        id="mask0_1152_18"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="14"
        height="14"
      >
        <path d="M0 0H14V14H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1152_18)">
        <path
          d="M11.025 0.65625H13.172L8.482 6.03025L14 13.3442H9.68L6.294 8.90925L2.424 13.3442H0.275L5.291 7.59425L0 0.65725H4.43L7.486 4.71025L11.025 0.65625ZM10.27 12.0562H11.46L3.78 1.87725H2.504L10.27 12.0562Z"
          fill="black"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1152_18">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// TEAM ICON
export const Team = () => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.754 7C13.72 7 14.504 7.784 14.504 8.75V13.499C14.504 14.6927 14.0298 15.8376 13.1857 16.6817C12.3416 17.5258 11.1967 18 10.003 18C8.80926 18 7.66441 17.5258 6.82031 16.6817C5.97621 15.8376 5.502 14.6927 5.502 13.499V8.75C5.502 7.784 6.285 7 7.252 7H12.754ZM12.754 8.5H7.252C7.1857 8.5 7.12211 8.52634 7.07522 8.57322C7.02834 8.62011 7.002 8.6837 7.002 8.75V13.499C7.002 14.2949 7.31818 15.0582 7.88097 15.621C8.44377 16.1838 9.20709 16.5 10.003 16.5C10.7989 16.5 11.5622 16.1838 12.125 15.621C12.6878 15.0582 13.004 14.2949 13.004 13.499V8.75C13.004 8.6837 12.9777 8.62011 12.9308 8.57322C12.8839 8.52634 12.8203 8.5 12.754 8.5ZM1.75 7H5.131C4.77831 7.42615 4.56286 7.94908 4.513 8.5H1.75C1.6837 8.5 1.62011 8.52634 1.57322 8.57322C1.52634 8.62011 1.5 8.6837 1.5 8.75V11.999C1.49974 12.3769 1.58519 12.75 1.7499 13.0902C1.91461 13.4304 2.1543 13.7288 2.45095 13.9629C2.7476 14.1971 3.09349 14.361 3.4626 14.4422C3.83171 14.5235 4.21444 14.52 4.582 14.432C4.667 14.936 4.822 15.417 5.035 15.864C4.70433 15.954 4.35933 15.9993 4 16C3.47463 16 2.9544 15.8965 2.46904 15.6954C1.98367 15.4943 1.54267 15.1996 1.17122 14.8281C0.799772 14.4565 0.505155 14.0155 0.304195 13.53C0.103235 13.0446 -0.000131218 12.5244 1.25011e-07 11.999V8.75C1.25011e-07 7.784 0.784 7 1.75 7ZM14.875 7H18.25C19.216 7 20 7.784 20 8.75V12C20.0001 12.6132 19.8593 13.2182 19.5884 13.7682C19.3175 14.3183 18.9237 14.7987 18.4376 15.1724C17.9514 15.546 17.3858 15.8029 16.7846 15.9232C16.1833 16.0435 15.5625 16.0239 14.97 15.866C15.184 15.418 15.339 14.937 15.425 14.433C15.6097 14.477 15.8013 14.4993 16 14.5C16.663 14.5 17.2989 14.2366 17.7678 13.7678C18.2366 13.2989 18.5 12.663 18.5 12V8.75C18.5 8.6837 18.4737 8.62011 18.4268 8.57322C18.3799 8.52634 18.3163 8.5 18.25 8.5H15.493C15.4431 7.94908 15.2277 7.42615 14.875 7ZM10 0C10.7956 0 11.5587 0.316071 12.1213 0.87868C12.6839 1.44129 13 2.20435 13 3C13 3.79565 12.6839 4.55871 12.1213 5.12132C11.5587 5.68393 10.7956 6 10 6C9.20435 6 8.44129 5.68393 7.87868 5.12132C7.31607 4.55871 7 3.79565 7 3C7 2.20435 7.31607 1.44129 7.87868 0.87868C8.44129 0.316071 9.20435 0 10 0ZM16.5 1C17.163 1 17.7989 1.26339 18.2678 1.73223C18.7366 2.20107 19 2.83696 19 3.5C19 4.16304 18.7366 4.79893 18.2678 5.26777C17.7989 5.73661 17.163 6 16.5 6C15.837 6 15.2011 5.73661 14.7322 5.26777C14.2634 4.79893 14 4.16304 14 3.5C14 2.83696 14.2634 2.20107 14.7322 1.73223C15.2011 1.26339 15.837 1 16.5 1ZM3.5 1C4.16304 1 4.79893 1.26339 5.26777 1.73223C5.73661 2.20107 6 2.83696 6 3.5C6 4.16304 5.73661 4.79893 5.26777 5.26777C4.79893 5.73661 4.16304 6 3.5 6C2.83696 6 2.20107 5.73661 1.73223 5.26777C1.26339 4.79893 1 4.16304 1 3.5C1 2.83696 1.26339 2.20107 1.73223 1.73223C2.20107 1.26339 2.83696 1 3.5 1ZM10 1.5C9.60218 1.5 9.22064 1.65804 8.93934 1.93934C8.65804 2.22064 8.5 2.60218 8.5 3C8.5 3.39782 8.65804 3.77936 8.93934 4.06066C9.22064 4.34196 9.60218 4.5 10 4.5C10.3978 4.5 10.7794 4.34196 11.0607 4.06066C11.342 3.77936 11.5 3.39782 11.5 3C11.5 2.60218 11.342 2.22064 11.0607 1.93934C10.7794 1.65804 10.3978 1.5 10 1.5ZM16.5 2.5C16.2348 2.5 15.9804 2.60536 15.7929 2.79289C15.6054 2.98043 15.5 3.23478 15.5 3.5C15.5 3.76522 15.6054 4.01957 15.7929 4.20711C15.9804 4.39464 16.2348 4.5 16.5 4.5C16.7652 4.5 17.0196 4.39464 17.2071 4.20711C17.3946 4.01957 17.5 3.76522 17.5 3.5C17.5 3.23478 17.3946 2.98043 17.2071 2.79289C17.0196 2.60536 16.7652 2.5 16.5 2.5ZM3.5 2.5C3.23478 2.5 2.98043 2.60536 2.79289 2.79289C2.60536 2.98043 2.5 3.23478 2.5 3.5C2.5 3.76522 2.60536 4.01957 2.79289 4.20711C2.98043 4.39464 3.23478 4.5 3.5 4.5C3.76522 4.5 4.01957 4.39464 4.20711 4.20711C4.39464 4.01957 4.5 3.76522 4.5 3.5C4.5 3.23478 4.39464 2.98043 4.20711 2.79289C4.01957 2.60536 3.76522 2.5 3.5 2.5Z"
      fill="#C4CFDE"
    />
  </svg>
);

// CONTACT ICON
export const Contact = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 5H1M3.5 11H1M3.5 17H1M3.5 9C3.5 5.229 3.5 3.343 4.672 2.172C5.844 1.001 7.729 1 11.5 1H13C16.771 1 18.657 1 19.828 2.172C20.999 3.344 21 5.229 21 9V13C21 16.771 21 18.657 19.828 19.828C18.656 20.999 16.771 21 13 21H11.5C7.729 21 5.843 21 4.672 19.828C3.501 18.656 3.5 16.771 3.5 13V9Z"
      stroke="#C4CFDE"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.275 7.49316C14.275 8.0236 14.0643 8.5323 13.6892 8.90738C13.3142 9.28245 12.8055 9.49316 12.275 9.49316C11.7446 9.49316 11.2359 9.28245 10.8608 8.90738C10.4857 8.5323 10.275 8.0236 10.275 7.49316C10.275 6.96273 10.4857 6.45402 10.8608 6.07895C11.2359 5.70388 11.7446 5.49316 12.275 5.49316C12.8055 5.49316 13.3142 5.70388 13.6892 6.07895C14.0643 6.45402 14.275 6.96273 14.275 7.49316ZM8.32003 14.7162C9.37803 13.0862 11.059 12.4762 12.275 12.4772C13.491 12.4782 15.122 13.0872 16.181 14.7172C16.2165 14.7666 16.2376 14.8249 16.242 14.8856C16.2465 14.9463 16.234 15.0071 16.206 15.0612C15.959 15.5002 15.19 16.3712 14.636 16.4302C13.998 16.4972 12.329 16.5072 12.276 16.5072C12.223 16.5072 10.503 16.4972 9.86603 16.4302C9.31003 16.3702 8.54203 15.5002 8.29403 15.0602C8.23303 14.9512 8.25103 14.8222 8.32003 14.7162Z"
      stroke="#C4CFDE"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// SKILL ICON
export const Skill = () => (
  <svg
    width="28"
    height="26"
    viewBox="0 0 28 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 24C28 25.1046 27.1046 26 26 26H22C20.8954 26 20 25.1046 20 24V2C20 0.89543 20.8954 0 22 0H26C27.1046 0 28 0.895431 28 2V24ZM22 22C22 23.1046 22.8954 24 24 24V24C25.1046 24 26 23.1046 26 22V4C26 2.89543 25.1046 2 24 2V2C22.8954 2 22 2.89543 22 4V22ZM18 24C18 25.1046 17.1046 26 16 26H12C10.8954 26 10 25.1046 10 24V10C10 8.89543 10.8954 8 12 8H16C17.1046 8 18 8.89543 18 10V24ZM12 22C12 23.1046 12.8954 24 14 24V24C15.1046 24 16 23.1046 16 22V12C16 10.8954 15.1046 10 14 10V10C12.8954 10 12 10.8954 12 12V22ZM8 24C8 25.1046 7.10457 26 6 26H2C0.895431 26 0 25.1046 0 24V16C0 14.8954 0.895431 14 2 14H6C7.10457 14 8 14.8954 8 16V24ZM2 22C2 23.1046 2.89543 24 4 24V24C5.10457 24 6 23.1046 6 22V18C6 16.8954 5.10457 16 4 16V16C2.89543 16 2 16.8954 2 18V22Z"
      fill="#C4CFDE"
    />
  </svg>
);
