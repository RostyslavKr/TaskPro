import css from './Background.module.css';
import {useMedia} from 'react-use';
import { useBoards } from 'hooks/useBoards'

export const Background = ({children}) => {
    const {boards, current} = useBoards();
    const selectedBgIndex = boards[current]?.background;
    const isWide = useMedia('(min-width: 1280px)');
    const isMobile = useMedia('(max-width: 320px)');
    const userRatio = useMedia('(-webkit-min-device-pixel-ratio: 2)')? "2x":"1x";
    let bg = {};
    if(selectedBgIndex !== "0") {
        const userScreen = isWide? "1280" : isMobile? "320-min" : "768-min";
        const url = `https://res.cloudinary.com/pro-task-cloud/image/upload/v1687806931/backgrounds/diego-ph-wyeapf7Gy-U-unsplash%20${selectedBgIndex}%40${userRatio}_${userScreen}.jpg.webp`;
        bg = {backgroundImage:`url(${url})`};
    }
    return(
        <div className={css.back} style={bg}>
            {children}
        </div>
    )
}