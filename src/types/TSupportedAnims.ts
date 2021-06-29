import SCRIPTED_ANIMS from '../koikatsu/SCRIPTED_ANIMS';
import AUTO_ANIMS from '../koikatsu/AUTO_ANIMS';

type TSupportedAnims = typeof SCRIPTED_ANIMS[number] | typeof AUTO_ANIMS[number];
export default TSupportedAnims;