import TSupportedAnimStates from '../types/TSupportedAnimStates';

export class HandyAuto {
	/**
	 * Calculates Handy auto stroking speed
	 */
	public static calcAutoSpeed(animState: TSupportedAnimStates, hFlagSpeed: number): number {
		const randomMulti = (Math.random() - 0.5) * 0.4 + 1; // 0.8 - 1.2
		return randomMulti * this.matchStateToSpeed(animState, hFlagSpeed);
	}

	private static matchStateToSpeed(animState: TSupportedAnimStates, hFlagSpeed: number) {
		switch (animState) {
			case 'Idle':
				return 10;
			case 'M_Touch':
			case 'M_Idle':
			case 'A_Touch':
			case 'A_Idle':
			case 'S_Touch':
			case 'S_Idle':
				return 25 + hFlagSpeed * 35;
			case 'K_Idle':
			case 'K_Touch':
			case 'K_Loop':
				return 10 + Math.max(hFlagSpeed * 25, 10);
			case 'Orgasm_Start':
			case 'Orgasm_Loop':
				return 30;
			case 'Front_Dislikes':
			case 'Back_Dislikes':
				return 20;
			default:
				console.error('This should never happen', animState);
				return 0;
		}
	}

	public static isSameAnimStates(
		a: TSupportedAnimStates | null,
		b: TSupportedAnimStates | null
	): boolean {
		// fast checks
		if (a === b) {
			return true;
		} else if (a === null || b === null) {
			return false;
		}
		// lazy way to check
		return this.matchStateToSpeed(a, 123) === this.matchStateToSpeed(b, 123);
	}

}