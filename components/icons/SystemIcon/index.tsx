import React, { type FC, type ReactNode } from "react";
import { SYSTEM_ICON_LIST } from "./iconList";

// default predefined states/colors
const STATES = {
	primary: styles.primary,
	secondary: styles.secondary,
	danger: styles.danger,
};

// default predefined sizes
const SIZES = {
	small: styles.small,
	medium: styles.mediun,
	large: styles.large,
};

/**
 * 
 * NO SUPPORT for overriding colors for multicolor svg icons
 * ICON has it's own predefined states and sizes
 * props inherits it's own values dynamically from the list
 */
const SystemIcon = (props: {
	state?: keyof typeof STATES;
	size?: keyof typeof SIZES;
	className?: string | string[];
	name: keyof typeof SYSTEM_ICON_LIST
}): ReactNode => {
	const currentIcon = SYSTEM_ICON_LIST[props.name];

	return (
		<span
			className={cx(STATES[props.state], SIZES[props.size], className)}
			dangerouslySetInnerHtml={currentIcon}
		/>
	);
};

/**
 * EXAMPLE USAGE IN PRACTICE
 */

const ExampleUsage = () => (
	<>
		<SystemIcon name='add' size='large' state="danger" />
	</>
);
