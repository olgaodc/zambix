import basicStyles from '../../basicStyles.module.css';
import styles from './Content.module.css';
import Article from '../article/Article';

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

const Content = () => {
    return (
        <div className={styles.contentWrapper}>
            <div className={basicStyles.container}>
                <div className={styles.content}>
                    <img className={styles.contentImage} src="https://thechive.com/wp-content/uploads/2019/12/person-hilariously-photoshops-animals-onto-random-things-xx-photos-25.jpg?attachment_cache_bust=3136487&quality=85&strip=info&w=400" alt=""/>
                    <div className={styles.contentText}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ad, dolor nulla veritatis hic quae doloribus aperiam corporis laborum aliquid vel pariatur adipisci excepturi explicabo alias culpa ratione ipsum sequi, laboriosam cupiditate exercitationem voluptatem. Aperiam adipisci sunt qui voluptatem numquam iusto, tenetur voluptatibus accusantium fugit eos voluptate quidem, sapiente dolores! Veniam modi provident, quidem ducimus quis officia eligendi quo unde consectetur iusto error doloremque dignissimos aliquam libero quisquam eos ratione facere ipsam? Quisquam laborum nobis perferendis error, corporis harum expedita accusantium sequi labore maxime inventore soluta cum vel! Nulla quae molestias cupiditate? Impedit sunt enim fuga vitae at sed praesentium voluptatibus cum in! Nihil possimus molestias placeat voluptatum voluptates laudantium debitis sapiente at delectus, accusamus omnis labore reiciendis commodi blanditiis!
                    </div>
                </div>

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
    );
}


export default Content;