/** Tailwind build config for the portfolio.
 * Rebuild the stylesheet after changing classes in index.html:
 *   npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind.input.css -o assets/tailwind.css --minify
 */
module.exports = {
    content: ["./index.html"],

            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary-container": "#303743",
                        "on-secondary-container": "#dce3ea",
                        "primary-fixed-dim": "#c5cdd5",
                        "tertiary-fixed-dim": "#838c97",
                        "surface-tint": "#dce3ea",
                        "on-primary-container": "#dce3ea",
                        "primary": "#f1f4f7",
                        "on-tertiary-container": "#dce3ea",
                        "surface-variant": "#1c2330",
                        "on-surface-variant": "#9aa3ae",
                        "inverse-surface": "#000001",
                        "secondary-fixed": "#303743",
                        "surface-container-low": "#0c1018",
                        "surface-container-high": "#151b24",
                        "error-container": "#303743",
                        "tertiary": "#c5cdd5",
                        "on-secondary": "#140806",
                        "on-secondary-fixed": "#dce3ea",
                        "on-primary": "#000001",
                        "on-primary-fixed-variant": "#303743",
                        "surface-container": "#10151d",
                        "outline-variant": "#303743",
                        "surface-dim": "#000001",
                        "secondary": "#c5cdd5",
                        "inverse-primary": "#303743",
                        "on-primary-fixed": "#000001",
                        "background": "#070b14",
                        "tertiary-container": "#1c2330",
                        "on-tertiary-fixed": "#000001",
                        "surface-bright": "#1c2330",
                        "surface-container-highest": "#1c2330",
                        "on-tertiary-fixed-variant": "#a9b2bd",
                        "outline": "#838c97",
                        "on-error": "#000001",
                        "secondary-fixed-dim": "#3d4552",
                        "on-surface": "#cdd4dc",
                        "primary-fixed": "#dce3ea",
                        "surface": "#070b14",
                        "on-secondary-fixed-variant": "#c5cdd5",
                        "error": "#f1f4f7",
                        "surface-container-lowest": "#05080e",
                        "on-error-container": "#dce3ea",
                        "tertiary-fixed": "#c5cdd5",
                        "secondary-container": "#303743",
                        "on-tertiary": "#000001",
                        "on-background": "#cdd4dc",
                        "inverse-on-surface": "#dce3ea"
                    },
                    borderRadius: {
                        DEFAULT: "0.25rem",
                        lg: "0.5rem",
                        xl: "0.75rem",
                        full: "9999px"
                    },
                    spacing: {
                        unit: "4px",
                        margin: "32px",
                        "container-max": "1200px",
                        gutter: "24px"
                    },
                    fontFamily: {
                        "headline-sm": ["JetBrains Mono", "monospace"],
                        "body-lg": ["Inter"],
                        "headline-md": ["JetBrains Mono", "monospace"],
                        "body-md": ["Inter"],
                        "label-md": ["JetBrains Mono", "monospace"],
                        "code-sm": ["JetBrains Mono", "monospace"],
                        "headline-lg": ["JetBrains Mono", "monospace"]
                    },
                    fontSize: {
                        "headline-sm": ["24px", { lineHeight: "1.2", fontWeight: "700" }],
                        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
                        "headline-md": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
                        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
                        "label-md": ["14px", { lineHeight: "1.0", fontWeight: "500" }],
                        "code-sm": ["13px", { lineHeight: "1.4", fontWeight: "400" }],
                        "headline-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }]
                    }
                }
            }
};
