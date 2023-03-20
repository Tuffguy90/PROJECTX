import PerlessLogo from '../../assets/images/logo1.png';
import { CardMedia } from '@mui/material/index';

const Logo = () => {
    return <CardMedia component="img" image={PerlessLogo} sx={{ width: 215 }} />;
};

export default Logo;
