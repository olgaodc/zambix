import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import duckPicture from '../../assets/duck.jpg';
import basicStyles from '../../basicStyles.module.css';
import styles from './Main.module.css';



const mainPage = () => {
    return (
        <>
            <Navbar/>
            <div className={styles.contentWrapper}>
                <div className={basicStyles.container}>
                    <div className={styles.content}>
                        <img className={styles.contentImage} src={duckPicture} alt="Funny duck with banana body"/>
                        <div className={styles.contentText}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ad, dolor nulla veritatis hic quae doloribus aperiam corporis laborum aliquid vel pariatur adipisci excepturi explicabo alias culpa ratione ipsum sequi, laboriosam cupiditate exercitationem voluptatem. Aperiam adipisci sunt qui voluptatem numquam iusto, tenetur voluptatibus accusantium fugit eos voluptate quidem, sapiente dolores! Veniam modi provident, quidem ducimus quis officia eligendi quo unde consectetur iusto error doloremque dignissimos aliquam libero quisquam eos ratione facere ipsam? Quisquam laborum nobis perferendis error, corporis harum expedita accusantium sequi labore maxime inventore soluta cum vel! Nulla quae molestias cupiditate? Impedit sunt enim fuga vitae at sed praesentium voluptatibus cum in! Nihil possimus molestias placeat voluptatum voluptates laudantium debitis sapiente at delectus, accusamus omnis labore reiciendis commodi blanditiis!
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default mainPage;