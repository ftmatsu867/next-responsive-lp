import styles from "./page.module.scss"
import Header from "@/app/components/Header/Header";
import Section2 from "@/app/components/Section2/Section2";
import Section3 from "@/app/components/Section3/Section3";
import Section4 from "@/app/components/Section4/Section4";
import Section5 from "@/app/components/Section5/Section5";
import Section1 from "@/app/components/Secton1/Section1";

export default function Home() {
  return (
    <div className={styles.body}> 
     <Header />
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    </div>

  );
}
