import Image from 'next/image';
import Link from 'next/link';

const Main = () => (
    <main className="page">
        <section className="page__mag mag">
            <div className="mag__container">
                <Link href="/form" className="mag__img">
                    <img src="/mag.png" alt="Mag Image"  />
                    <img src="/regiment.png" alt="Regiment Image"  />
                </Link>
            </div>
        </section>
    </main>
);

export default Main;
