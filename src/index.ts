/**
 * Frontend Library
 *
 * A comprehensive collection of design tokens, AI prompts, component patterns,
 * and Tailwind configurations reverse-engineered from:
 *
 * - designprompts.dev (31 design styles)
 * - caramell.app (landing page builder)
 * - Supabase Platform Kit
 * - aura.build (component library)
 *
 * @example
 * ```typescript
 * import {
 *   allStyles,
 *   generateStylePrompt,
 *   buttonPatterns,
 *   generateTailwindConfig
 * } from 'frontend-library';
 *
 * // Get design tokens for a specific style
 * const tokens = allStyles.neoBrutalism;
 *
 * // Generate an AI prompt for that style
 * const prompt = generateStylePrompt('neoBrutalism');
 *
 * // Get component patterns
 * const buttonClasses = buttonPatterns.neoBrutalist.base;
 *
 * // Generate Tailwind config
 * const tailwindConfig = generateTailwindConfig('neoBrutalism');
 * ```
 */

// ============================================================================
// DESIGN TOKENS
// ============================================================================

export {
  // Types
  type DesignTokens,
  type StyleName,

  // Individual style tokens
  monochrome,
  cyberpunk,
  neoBrutalism,
  saasTech,
  claymorphism,
  terminal,
  bauhaus,
  neumorphism,
  luxury,
  artDeco,
  web3,
  wiseDesign,

  // Collections
  allStyles,
  styleMetadata,
  styleCategories,
} from './tokens/design-tokens';

// ============================================================================
// AI PROMPTS
// ============================================================================

export {
  // Base prompt
  BASE_SYSTEM_PROMPT,

  // Generators
  generateStylePrompt,
  generateLandingPagePrompt,

  // Component prompts
  COMPONENT_PROMPTS,
} from './prompts/base-prompt';

// ============================================================================
// COMPONENT PATTERNS
// ============================================================================

export {
  // UI Components
  buttonPatterns,
  cardPatterns,
  inputPatterns,
  badgePatterns,

  // Layout Components
  sectionPatterns,
  navigationPatterns,

  // Animation
  animationPatterns,
} from './components/patterns';

// ============================================================================
// TAILWIND CONFIGURATION
// ============================================================================

export {
  // Types
  type TailwindTheme,
  type TailwindConfig,

  // CSS Variable Generators
  generateCSSVariables,
  generateHSLVariables,
  generateShadcnVariables,

  // Tailwind Generators
  generateTailwindTheme,
  generateTailwindConfig,
  generateTailwindConfigString,

  // Utility Generators
  generateUtilityClasses,

  // Pre-built configurations
  tailwindPresets,
  cssVariablePresets,
} from './config/tailwind.config';

// ============================================================================
// TEMPLATES
// ============================================================================

export {
  // Types
  type LandingPageTemplate,
  type TemplateSection,

  // Template collection
  templates,

  // Individual templates
  dexoMediaTemplate,
  velourFashionTemplate,
  lowkeyCoffeeTemplate,
  wiseTransferTemplate,

  // Template helpers
  getTemplatesByStyle,
  getTemplatesBySource,
  getTemplatesByCategory,
  getSectionExamples,
  getTemplateByName,
  listTemplates,
} from './templates';

// ============================================================================
// CONVENIENCE EXPORTS
// ============================================================================

/**
 * Get everything needed for a specific design style
 */
export function getStyleKit(styleName: import('./tokens/design-tokens').StyleName) {
  const { allStyles } = require('./tokens/design-tokens');
  const { generateStylePrompt, generateLandingPagePrompt, COMPONENT_PROMPTS } = require('./prompts/base-prompt');
  const { generateCSSVariables, generateTailwindConfig, generateUtilityClasses } = require('./config/tailwind.config');

  const tokens = allStyles[styleName];

  return {
    // Design tokens
    tokens,

    // AI Prompts
    stylePrompt: generateStylePrompt(styleName),
    landingPagePrompt: generateLandingPagePrompt(styleName),
    componentPrompts: COMPONENT_PROMPTS,

    // CSS/Tailwind
    cssVariables: generateCSSVariables(tokens),
    tailwindConfig: generateTailwindConfig(styleName),
    utilityClasses: generateUtilityClasses(styleName),
  };
}

/**
 * List all available design styles
 */
export function listStyles() {
  const { styleMetadata } = require('./tokens/design-tokens');
  return styleMetadata;
}
