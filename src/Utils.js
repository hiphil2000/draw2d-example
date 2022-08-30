export function Padding(...args) {
	switch (args.length) {
		case 1:
			return args[0];
		case 2:
			return {left: args[0], top: args[1], right: args[0], bottom: args[1]};
		case 4:
			return {left: args[0], top: args[1], right: args[2], bottom: args[3]};
	}
}