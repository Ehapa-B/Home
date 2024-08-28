import LogoIcon from '../../assets/images/logo.png'
import style from './style.module.css'

export const LogoImage = () => {
    return (
        <div className={style.logo}>
        <a href='/home'>  <img src={LogoIcon} alt="logo" /></a>
        </div>
    )
}