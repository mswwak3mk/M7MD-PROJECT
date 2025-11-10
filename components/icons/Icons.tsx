import React from 'react';

const iconProps = {
  className: "w-8 h-8",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round" as "round",
  strokeLinejoin: "round" as "round",
};

export const UserIcon: React.FC = () => (
  <svg {...iconProps} className="w-6 h-6"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
export const EyeIcon: React.FC = () => (
    <svg {...iconProps} className="w-6 h-6"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);

// REPLACED: Using a simple, integer-only lightbulb icon to prevent loading errors.
export const LightbulbIcon: React.FC = () => (
    <svg {...iconProps}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-7 7c0 3 2 5 3 6h8c1-1 3-3 3-6a7 7 0 0 0-7-7z" />
    </svg>
);

// REPLACED: Using a simpler version with separate paths to avoid parsing issues.
export const GamepadIcon: React.FC = () => (
    <svg {...iconProps} className="w-6 h-6">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 12h4" />
        <path d="M8 10v4" />
        <circle cx="16" cy="11" r="1" />
        <circle cx="18" cy="13" r="1" />
    </svg>
);

// REPLACED: Using a simple trophy icon with integer-only values to prevent loading errors.
export const MedalIcon: React.FC = () => (
    <svg {...iconProps} className="w-6 h-6">
        <path d="M6 9H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2" />
        <path d="M12 15a6 6 0 0 1-6-6h12a6 6 0 0 1-6 6z" />
        <path d="M12 15v6" />
        <path d="M9 21h6" />
    </svg>
);

// REPLACED: Using a simple, integer-only beaker icon for Science to guarantee it loads.
export const ScienceIcon: React.FC = () => (
    <svg {...iconProps} className="w-6 h-6">
        <path d="M4 21h16" />
        <path d="M6 21v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
        <path d="M6 18V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
        <path d="M10 10h4" />
    </svg>
);

// FIXED: Removed decimal value from cx attribute to prevent loading error.
export const UsersIcon: React.FC = () => (
    <svg {...iconProps} className="w-6 h-6"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M20 8v6m-3-3h6"></path></svg>
);

export const ChatAltIcon: React.FC = () => (
    <svg {...iconProps}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);
export const TrashIcon: React.FC = () => (
    <svg {...iconProps} className="w-5 h-5"><path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 5v6m4-6v6"></path></svg>
);
export const PlusIcon: React.FC = () => (
    <svg {...iconProps} className="w-5 h-5"><path d="M12 5v14m-7-7h14"></path></svg>
);
export const UploadIcon: React.FC = () => (
    <svg {...iconProps} className="w-5 h-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m14-7-5-5-5 5m5-5v12"></path></svg>
);