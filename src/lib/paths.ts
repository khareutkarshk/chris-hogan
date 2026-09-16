/**
 * Prefix site-root paths with Astro `base` (needed for GitHub Pages project URLs).
 * Pass through hashes, absolute URLs, and mailto/tel links unchanged.
 * Idempotent if the path already includes `base`.
 */
export function withBase(path: string): string {
	if (
		!path ||
		path.startsWith('#') ||
		path.startsWith('http://') ||
		path.startsWith('https://') ||
		path.startsWith('mailto:') ||
		path.startsWith('tel:')
	) {
		return path;
	}

	const base = import.meta.env.BASE_URL || '/';
	const normalizedBase = base.endsWith('/') ? base : `${base}/`;

	if (path.startsWith(normalizedBase) || (normalizedBase !== '/' && path.startsWith(normalizedBase.slice(0, -1) + '/'))) {
		return path;
	}

	return `${normalizedBase}${path.replace(/^\//, '')}`;
}
