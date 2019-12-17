/**
 * Loader is responsible for hot reloading only components that have changed
 * Should only be used in dev mode
 * Helps developer make better looking styleguides
 * @param this
 * @param source
 */
export default function(this: Rsg.StyleguidistLoaderContext, source: string): string {
	const componentName: string = this.request.split('/').pop() || '';
	return source;
}
