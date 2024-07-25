import React, { type FC, type ReactNode } from "react";
import { SERVICE_ICON_LIST, SERVICE_ICON_LIST_BY_TITLE } from "./iconList";

const SIZES = {
	small: styles.small,
	medium: styles.mediun,
	large: styles.large,
};

/**
 * 
 * NO SUPPORT for overriding colors for multicolor svg icons
 * ICON has it's own predefined states and sizes
 * props are being inherited out of the box
 */
const ApplicationIcon = <T extends boolean | undefined>(props: {
	byTitle?: T;
	size?: keyof typeof SIZES;
	className?: string | string[];
	name: T extends true
		? keyof typeof SERVICE_ICON_LIST_BY_TITLE
		: keyof typeof SERVICE_ICON_LIST;
}): ReactNode => {

	const currentIcon = props.byTitle ? 
		? SERVICE_ICON_LIST[SERVICE_ICON_LIST_BY_TITLE[props.name]]
		: SERVICE_ICON_LIST[props.name];

    // or dynamically load/display icons asynchronously

	return (
		<span
			className={(cx(SIZES[props.size]), className)}
			dangerouslySetInnerHtml={currentIcon}
		/>
	);
};

/**
 * EXAMPLE USAGE IN PRACTICE
 */

const ExampleUsage = () => (
	<>
		<ApplicationIcon byTitle name="Service Name" size="small" />
		<ApplicationIcon name="service-1" />
	</>
);
