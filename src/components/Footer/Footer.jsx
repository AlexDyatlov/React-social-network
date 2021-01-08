import s from './Footer.module.scss'

const Footer = (props) => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__content}>© 2020-2021</div>
        </footer>
    )
}

export default Footer;