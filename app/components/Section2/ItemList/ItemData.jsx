import { faDocker, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faFire, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/app/components/Section2/ItemList/ItemData.module.scss"

export const ItemData=[
    {
        "src":<FontAwesomeIcon icon={faTiktok} className={styles.icon} />
    },
    {
        "src":<FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
    },
    {
        "src":<FontAwesomeIcon icon={faDocker} className={styles.icon} />
    },
    {
        "src":<FontAwesomeIcon icon={faHeadphones} className={styles.icon} />
    },
    {
        "src":<FontAwesomeIcon icon={faFire} className={styles.icon} />
    },
    {
        "src":<FontAwesomeIcon icon={faCommentDots} className={styles.icon} />
    }

]