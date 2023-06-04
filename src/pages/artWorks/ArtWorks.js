import Navbar from '../../components/navbar/Navbar';
import Article from '../../components/article/Article';
import Footer from '../../components/footer/Footer';
import basicStyles from '../../basicStyles.module.css';
import styles from './ArtWorks.module.css';

const itemsArray = [
    {title: '2024th coming',
     author: 'Vincent van Bot',
     image: 'https://pbs.twimg.com/profile_images/1045481596986576896/8dUabRh7_400x400.jpg',
     outdated: false,
    },
    {title: 'Movie Time',
     author: 'Luis Dark',
     image: 'https://ae01.alicdn.com/kf/HTB192XJaozrK1RjSspmq6AOdFXaI/Pug-Mandi-Lucu-Anjing-Menonton-Film-Popcorn-Minuman-ringan-dan-Kacamata-Hewan-Foto-Cetak-Mewah-Kamar.jpg_Q90.jpg_.webp',
     outdated: true,
    },
    {title: "Old M&M's",
     author: 'Margaret Bolt',
     image: 'https://i1.sndcdn.com/avatars-000508491087-32hktm-t500x500.jpg',
     outdated: false,
    },
    {title: 'NFT art',
     author: 'Henry Mojito',
     image: 'https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960',
     outdated: false,
    },
    {title: 'Pixelmania',
     author: 'Zoe Roe',
     image: 'https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27',
     outdated: false,
    },
    {title: 'Cry me a river',
     author: 'John Badas',
     image: 'https://yt3.googleusercontent.com/ytc/AGIKgqPteLeRkXc8ajEfziyf9h1dH_h9EwRzZo0-N5f1Uw=s900-c-k-c0x00ffffff-no-rj',
     outdated: false,
    },
    {title: 'Save the Planet',
     author: 'Melisa Zan',
     image: 'https://cdn.geekwire.com/wp-content/uploads/2022/07/melaniabilustracion-No-Planet-B-square.jpg',
     outdated: false,
    },
];

const artWorksPage = () => {
    return (
        <>
        <Navbar/>
        <div className={styles.ArticlesSectionWrapper}>
            <div className={basicStyles.container}>
                <div className={styles.ArticlesSection}>
                    <div className={styles.articlesSection}>
                        {itemsArray.map((article) => {
                            if (article.outdated) {
                            return null;
                        }
                            return <Article title={article.title} author={article.author} img={article.image}/>
                        })}
                    </div>
                </div>   
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default artWorksPage;