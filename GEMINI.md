# AI Assistant Guidelines & Best Practices

Use Fast Node Manager to run npm commands:

```
eval "$(fnm env --use-on-cd --shell bash)"
```

## Core Principles

- **User-first**: Prioritize intent, understand before acting, provide actionable solutions
- **Quality-driven**: Think thoroughly, validate assumptions, deliver working solutions
- **Transparent**: Be direct, explain decisions, use professional language

## Tool Usage Guidelines

- **Choose strategically**: `read_file` for code examination, `search_files` for patterns, `replace_in_file` for targeted changes
- **Work efficiently**: Batch operations, use precise regex, validate before modifying
- **Prevent errors**: Match exact context, include sufficient context, verify after changes

## Code Organization & Structure

### Component Organization

```
src/components/
├── [Feature]/          # Feature-based grouping
│   ├── Component.jsx   # React/JSX components
│   ├── types.js        # TypeScript definitions
│   └── index.js        # Barrel exports
├── shared/             # Reusable components
│   ├── ui/            # Basic UI components
│   └── utils/         # Helper functions
└── [Page].jsx         # Page-specific components
```

### Style Organization

```
src/styles/
├── global.css         # Global styles, resets, variables
├── [feature]/         # Feature-specific styles
│   ├── component.css  # Component styles
│   └── responsive.css # Media queries
├── themes/           # Theme files
└── utils/           # Mixins, functions
```

## Code Guidelines

### JavaScript/React

- **Use functional components** with hooks over class components
- **Implement proper error boundaries** for component trees
- **Follow naming conventions**: `PascalCase` for components, `camelCase` for functions/variables
- **Use prop types** or TypeScript for type safety
- **Handle loading and error states** explicitly

### Astro Components

- **Prefer static generation** over server-side rendering when possible
- **Use proper frontmatter** for metadata and imports
- **Leverage Astro's partial hydration** for interactive components
- **Organize by page type**: layouts, pages, components

### CSS/Styling

- **Use CSS custom properties** for theming and consistency
- **Follow mobile-first** responsive design approach
- **Prefer CSS Grid/Flexbox** over floats for layouts
- **Use semantic class names** following BEM methodology

### File Structure Best Practices

- **Colocate related files** (component, styles, tests together)
- **Use index files** for clean imports: `import { Component } from './Component'`
- **Separate concerns**: keep business logic separate from presentation
- **Use feature-based organization** over type-based for larger projects

## Problem-Solving Workflow

1. **Analyze** requirements and constraints
2. **Gather** context from codebase
3. **Plan** implementation approach
4. **Execute** with atomic changes
5. **Verify** functionality and performance
6. **Document** important decisions

## Resources & References

- [Astro Documentation](https://docs.astro.build/) - Framework guide
- [React Best Practices](https://react.dev/learn/thinking-in-react) - Component design
- [CSS Guidelines](https://cssguidelin.es/) - Style organization
- [BEM Methodology](http://getbem.com/) - CSS naming convention
- [MDN Web Docs](https://developer.mozilla.org/) - Web standards reference
- [Radix Theme](https://www.radix-ui.com/themes/docs/overview/getting-started) - Install Radix Themes and start building in minutes.
- [Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/getting-started) - A quick tutorial to get you up and running with Radix Primitives.
- [fnm](https://github.com/Schniz/fnm?tab=readme-ov-file#bash) - Bash command

## Project-Specific Rules

- **Maintain Fortnite Crew styling** in `src/styles/fortnite-crew.css`
- **Follow established component patterns** from existing files
- **Use Astro layouts** for consistent page structure
- **Preserve responsive design** across all breakpoints
- **Test interactive features** before finalizing changes

## UI Component Guidelines (Radix UI)

- **Prefer Radix UI components** over building from scratch for common UI patterns
- **Install via npm**: `@radix-ui/react-[component-name]` (e.g., `@radix-ui/react-dialog`)
- **Style with CSS variables** to match Fortnite Crew theme
- **Maintain accessibility** - preserve Radix's ARIA attributes and keyboard navigation
- **Customize minimally** - leverage Radix's theming system over heavy customization

### Recommended Radix Components

- **Dialog/Modal** - `@radix-ui/react-dialog` for popups and modals
- **Dropdown Menu** - `@radix-ui/react-dropdown-menu` for navigation menus
- **Tabs** - `@radix-ui/react-tabs` for content organization
- **Tooltip** - `@radix-ui/react-tooltip` for helpful hints
- **Switch/Toggle** - `@radix-ui/react-switch` for boolean controls
- **Select** - `@radix-ui/react-select` for dropdown selections

### Radix Integration Pattern

```typescript
// 1. Install: npm install @radix-ui/react-dialog
// 2. Import and use with styling
import * as Dialog from '@radix-ui/react-dialog';

<Dialog.Root>
  <Dialog.Trigger>Custom Styled Trigger</Dialog.Trigger>
  <Dialog.Content className="fortnite-crew-dialog">
    {/* Content with theme styling */}
  </Dialog.Content>
</Dialog.Root>;
```

## Success Metrics

- ✅ **Code Quality**: Follows patterns, functional, well-documented
- ✅ **Process**: Requirements understood, tools used efficiently
- ✅ **Outcomes**: Problems solved, maintainable, no side effects
