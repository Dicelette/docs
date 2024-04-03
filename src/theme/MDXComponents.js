// Import the original mapper

import { Icon } from '@iconify/react';
import MDXComponents from "@theme-original/MDXComponents";


export default {
	// Re-use the default mapping
	...MDXComponents,
	Iconify: Icon, // Make the iconify ICON component available in MDX as <icon />.
};