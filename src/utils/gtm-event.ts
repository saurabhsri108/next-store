export const sendAnalyticsEvent = <T>(eventType: string, properties: T): void => {
	if (typeof window !== "undefined") {
		const _ga = (window as any).dataLayer || [];
		if (properties && Object.keys(properties).length > 0) {
			_ga.push(function (this: any) {
				this.reset();
			});
			_ga.push({
				event: eventType,
				...properties,
			});
		}
	}
};
