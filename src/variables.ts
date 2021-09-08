import {html, css} from 'lit';

export const Variables = {
    appBarHeight: 64,
    navWidth: 240,
    breakPointMobile: 600,
    breakPointTablet: 950,
    breakPointDesktop: 1024
};

export const Colors = {
    backgroundColor: css`var(--background-color, #f4f4f4)`,
	textColor: css`var(--text-color, #242424)`,

    primaryColor: css`var(--primary-color, #0f4c81)`,
    textOnPrimary: css`var(--text-on-primary-color, #f4f4f4)`,
    
	accentColor: css`var(--accent-color, #ffc107)`,
	textOnAccent: css`var(--text-on-accent-color, #f4f4f4)`
};
