import React from 'react';
import { ClipPath, Defs, G, Path, Svg } from 'react-native-svg';

export const HomeSVG = ({ color }: { color: string }) => {
  return (
    <Svg width={20} height={20} viewBox="0.00 0.00 24.00 24.00">
      <Path
        fill="#3E4554"
        d="M5.74 22.31c-5.18-.93-3.96-7.75-3.96-11.21a4.41 4.36-25.1 011.04-2.83c3.14-3.71 8.43-11.58 13.86-5.09q2.09 2.51 4.34 4.81a4.19 4.18 23.2 011.19 2.97c-.05 4.35 1.43 11.01-5.12 11.58q-6.79.6-11.35-.23zm7.97-19.63c-1.65-.85-3.55-.39-4.73.99Q6.53 6.51 3.81 9.21a1.67 1.66-21.4 00-.5 1.14C3.23 13.17 2 20.51 6.5 21.02q4.87.54 10.4.06c2.06-.19 3.85-1.49 3.85-3.68q.01-3.2-.01-6.22a3.41 3.4 23.4 00-.91-2.29l-5.05-5.41q-.47-.49-1.07-.8z"
      />
      <Path
        fill="#3E4554"
        d="M9.75 15.16l-.01 2.08q0 .48-.48.54-.28.04-.53-.08-.3-.14-.36-.46c-.34-1.8-.49-3.21 1.16-4.54q3.07-2.48 5.91.97.32.4.32.91l-.03 2.84q-.01.45-.45.37l-.37-.06q-.62-.1-.63-.73l-.04-2.04q-.01-.59-.47-.95-2.09-1.64-3.7.28-.32.37-.32.87z"
      />
    </Svg>
  );
};

export const CategoriesSVG = ({ color }: { color: string }) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.0004 4.6738C19.0004 6.7024 17.3552 8.3476 15.3266 8.3476C13.298 8.3476 11.6537 6.7024 11.6537 4.6738C11.6537 2.6452 13.298 1 15.3266 1C17.3552 1 19.0004 2.6452 19.0004 4.6738Z"
        stroke={color === 'none' ? '#3E4554' : color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={color || 'white'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.0004 4.6738C19.0004 6.7024 17.3552 8.3476 15.3266 8.3476C13.298 8.3476 11.6537 6.7024 11.6537 4.6738C11.6537 2.6452 13.298 1 15.3266 1C17.3552 1 19.0004 2.6452 19.0004 4.6738Z"
        stroke={color === 'none' ? 'black' : color}
        stroke-opacity="0.2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={color || 'white'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.3467 4.6738C8.3467 6.7024 6.7024 8.3476 4.6729 8.3476C2.6452 8.3476 1 6.7024 1 4.6738C1 2.6452 2.6452 1 4.6729 1C6.7024 1 8.3467 2.6452 8.3467 4.6738Z"
        stroke={color === 'none' ? '#3E4554' : color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={color || 'white'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.3467 4.6738C8.3467 6.7024 6.7024 8.3476 4.6729 8.3476C2.6452 8.3476 1 6.7024 1 4.6738C1 2.6452 2.6452 1 4.6729 1C6.7024 1 8.3467 2.6452 8.3467 4.6738Z"
        stroke={color === 'none' ? 'black' : color}
        stroke-opacity="0.2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={color || 'white'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.0004 15.2619C19.0004 17.2905 17.3552 18.9348 15.3266 18.9348C13.298 18.9348 11.6537 17.2905 11.6537 15.2619C11.6537 13.2333 13.298 11.5881 15.3266 11.5881C17.3552 11.5881 19.0004 13.2333 19.0004 15.2619Z"
        stroke={color === 'none' ? '#3E4554' : color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={color || 'white'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.0004 15.2619C19.0004 17.2905 17.3552 18.9348 15.3266 18.9348C13.298 18.9348 11.6537 17.2905 11.6537 15.2619C11.6537 13.2333 13.298 11.5881 15.3266 11.5881C17.3552 11.5881 19.0004 13.2333 19.0004 15.2619Z"
        stroke={color === 'none' ? 'black' : color}
        stroke-opacity="0.2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.3467 15.2619C8.3467 17.2905 6.7024 18.9348 4.6729 18.9348C2.6452 18.9348 1 17.2905 1 15.2619C1 13.2333 2.6452 11.5881 4.6729 11.5881C6.7024 11.5881 8.3467 13.2333 8.3467 15.2619Z"
        stroke={color === 'none' ? '#3E4554' : color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={color || 'white'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.3467 15.2619C8.3467 17.2905 6.7024 18.9348 4.6729 18.9348C2.6452 18.9348 1 17.2905 1 15.2619C1 13.2333 2.6452 11.5881 4.6729 11.5881C6.7024 11.5881 8.3467 13.2333 8.3467 15.2619Z"
        stroke={color === 'none' ? 'black' : color}
        stroke-opacity="0.2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={color || 'white'}
      />
    </Svg>
  );
};

export const ShoppingBagSVG = ({ color = 'white' }) => {
  return (
    <Svg width="18" height="20" viewBox="0 0 18 20" fill={'none'}>
      <Path
        d="M13.4485 5.9995C10.2931 6.51124 7.63269 6.49623 4.56871 5.99535C2.47793 5.65356 0.597986 7.484 1.09451 9.53958L2.86182 16.8562C3.16559 18.1138 4.29303 19 5.58921 19H12.4423C13.7385 19 14.8659 18.1138 15.1697 16.8562L16.9336 9.55363C17.4309 7.49478 15.5431 5.65982 13.4485 5.9995Z"
        stroke={color}
      />
      <Path
        d="M5 8.83231L5.00001 4.49999C5.00001 2.567 6.56701 1 8.50001 1H9.5C11.433 1 13 2.567 13 4.5V9"
        stroke={color}
        stroke-linecap="round"
      />
    </Svg>
  );
};

export const SearchSVG = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M15.3167 14.4549L12.7386 11.9344L12.6782 11.8425C12.5658 11.7306 12.4122 11.6676 12.2519 11.6676C12.0915 11.6676 11.9379 11.7306 11.8256 11.8425C9.63461 13.8525 6.25861 13.9618 3.9365 12.0978C1.6144 10.2338 1.06675 6.97503 2.65676 4.48263C4.24678 1.99023 7.48105 1.03764 10.2146 2.2566C12.9482 3.47557 14.3329 6.48784 13.4503 9.2957C13.3867 9.49854 13.4387 9.71913 13.5866 9.87437C13.7345 10.0296 13.9558 10.0959 14.1673 10.0483C14.3787 10.0007 14.5482 9.84643 14.6117 9.64358C15.6668 6.31148 14.0733 2.72567 10.8621 1.20579C7.65087 -0.314079 3.78563 0.688118 1.76679 3.56406C-0.252047 6.44001 0.181384 10.3266 2.7867 12.7096C5.39201 15.0926 9.38734 15.2569 12.1881 13.0962L14.4707 15.3279C14.7065 15.5574 15.0876 15.5574 15.3234 15.3279C15.5589 15.0952 15.5589 14.7204 15.3234 14.4877L15.3167 14.4549Z"
        fill="#F8F9FB"
      />
    </Svg>
  );
};

export const ArrowDownSVG = () => {
  return (
    <Svg width="9" height="5" viewBox="0 0 9 5" fill="none">
      <Path
        d="M1 0.757L4.471 4.243L7.942 0.757"
        stroke="#B2BBCE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const HeartSVG = ({ active }: { active: boolean }) => {
  return (
    <Svg width={15} height={14} viewBox="0 0 15 14" fill="none">
      <Path
        d="M7.275 13.35l-1.055-.96C2.474 8.992 0 6.75 0 4 0 1.761 1.76 0 4.001 0c1.266 0 2.481.59 3.274 1.52A4.357 4.357 0 0110.55 0c2.24 0 4.001 1.76 4.001 4.001 0 2.75-2.473 4.991-6.22 8.396l-1.055.953z"
        fill={active ? '#FF8181' : '#3E4554'}
      />
    </Svg>
  );
};

export const AddSVG = ({ color = '#fff', size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <G clipPath="url(#clip0_0_84)">
        <Path
          d="M9.5 5.5h-3v-3a.5.5 0 10-1 0v3h-3a.5.5 0 100 1h3v3a.5.5 0 101 0v-3h3a.5.5 0 100-1z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_84">
          <Path fill={color} d="M0 0H12V12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const RemoveSVG = ({ color = '#130F26' }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 20 20" fill="none">
      <Path
        d="M13.6666 9.99048H6.33325"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const ArrowBack = () => {
  return (
    <Svg width={7} height={18} viewBox="0 0 5 9" fill="none">
      <Path
        d="M4.25.557a.747.747 0 00-.528.22L.235 4.246a.751.751 0 000 1.062l3.487 3.472A.749.749 0 104.78 7.718l-2.953-2.94 2.953-2.94a.75.75 0 00-.53-1.28z"
        fill="#1E222B"
      />
    </Svg>
  );
};

export const MoreSVG = ({ color = '#fff' }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8Z"
        fill="#3E4554"
      />
      <Path
        d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8Z"
        fill="black"
        fill-opacity="0.2"
      />
    </Svg>
  );
};

export const FavouriteSVG = ({ color = '#fff' }) => {
  return (
    <Svg width={22} height={20} viewBox="0 0 22 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
        stroke="#3E4554"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
        stroke="black"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M15 4.70001C16.07 5.04601 16.826 6.00101 16.917 7.12201"
          stroke="#3E4554"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15 4.70001C16.07 5.04601 16.826 6.00101 16.917 7.12201"
          stroke="black"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
