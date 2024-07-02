import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./ItemData.module.scss"
import { faDocker, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
export const ItemData=[
    {
        "src":<FontAwesomeIcon icon={faTiktok} className={styles.icon}  />,
        "title":"create tiktok",
        "script":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        "src":<FontAwesomeIcon icon={faCartShopping} className={styles.icon} />,
        "title":"cartshopping",
        "script":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        "src":<FontAwesomeIcon icon={faDocker} className={styles.icon} />,
        "title":"docker desktop",
        "script":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
]