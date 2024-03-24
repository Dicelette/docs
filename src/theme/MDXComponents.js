// Import the original mapper
import { library } from "@fortawesome/fontawesome-svg-core"; // Import the library component.
import { fab } from "@fortawesome/free-brands-svg-icons"; // Import all brands icons.
import { fas } from "@fortawesome/free-solid-svg-icons"; // Import all solid icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component.
import MDXComponents from "@theme-original/MDXComponents";

library.add(fab, fas); // Add all icons to the library so you can use them without importing them individually.

export default {
	// Re-use the default mapping
	...MDXComponents,
	FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <icon />.
};