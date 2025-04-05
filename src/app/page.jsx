import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ChatBot from '@/components/ChatBot';
import styles from './page.module.css';

export async function fetchDepoimentos() {
  const res = await fetch(`${process.env.API_URL}/depoimentos`, {
    headers: {
      'X-CSRF-TOKEN': process.env.CSRF_TOKEN
    }
  });
  
  if (!res.ok) throw new Error('Falha ao carregar depoimentos');
  return await res.json();
}


// getServerSideProps atualizado
export async function getServerSideProps() {
  try {
    const depoimentos = await fetchDepoimentos();
    return { props: { depoimentos, isMockData: false } };
  } catch (error) {
    return { 
      props: { 
        depoimentos: mockDepoimentos,
        isMockData: true
      } 
    };
  }
}


export async function generateMetadata() {
  return {
    title: "Geladinhos Gourmet e Doces Artesanais em Praia Grande - Ice Candy Lovers",
    description: "Delicie-se com os melhores geladinhos gourmet e doces artesanais em Praia Grande, SP. Ingredientes frescos e sabores irresistíveis!",
    keywords: ["geladinhos gourmet Praia Grande", "doces artesanais", "Ice Candy Lovers"],
    authors: [{ name: "Ice Candy Lovers" }],
    metadataBase: new URL('https://www.icecandylovers.com'),
    alternates: {
      canonical: '/'
    },
    openGraph: {
      title: "Geladinhos Gourmet e Doces Artesanais em Praia Grande - Ice Candy Lovers",
      description: "Delicie-se com os melhores geladinhos gourmet e doces artesanais em Praia Grande, SP.",
      url: 'https://www.icecandylovers.com',
      siteName: 'Ice Candy Lovers',
      images: [
        {
          url: 'https://www.icecandylovers.com/img/logo.png',
          width: 800,
          height: 600,
          alt: 'Logo Ice Candy Lovers',
        },
      ],
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Geladinhos Gourmet e Doces Artesanais em Praia Grande - Ice Candy Lovers",
      description: "Delicie-se com os melhores geladinhos gourmet e doces artesanais em Praia Grande, SP.",
      images: ['https://www.icecandylovers.com/img/logo.png'],
    },
    icons: {
      icon: '/assets/favicon.ico',
    },
  };
}

export default function Home({ csrfToken }) {
  return (
    <div className={styles.index}>
      {/* 👇 Mantenha APENAS o que NÃO está no generateMetadata */}
      <meta name="_csrf" content={csrfToken} />
      <meta name="_csrf_header" content="X-CSRF-TOKEN" />
      {/* 👇 Links de estilos (não são metadados) */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/css/style.css" />

      export default function Home() {
        let csrfToken = 'mock-csrf-token'; // Substituir por valor real do backend
        let csrfHeader = 'X-CSRF-TOKEN'; // Substituir por valor real do backend

      return (
      <div className={styles.index}>

        <title>Geladinhos Gourmet e Doces Artesanais em Praia Grande - Ice Candy Lovers</title>
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://www.icecandylovers.com/" />
        <link rel="icon" href="/assets/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/style.css" />
        <meta name="_csrf" content={csrfToken} />
        <meta name="_csrf_header" content={csrfHeader} />
        {/* ... outros scripts JSON-LD podem ser mantidos se desejado ... */}

        <nav className={`${styles.navbar} navbar`}>
          <div className="container">
            <a className={`${styles['navbar-brand']} navbar-brand d-flex align-items-center`} href="/" title="Voltar à página inicial da Ice Candy Lovers">
              <Image
                src="/img/logo.png"
                alt="Logo Ice Candy Lovers - Geladinhos Gourmet em Praia Grande"
                width={100}
                height={100}
                className={styles['navbar-logo']}
                loading="lazy"
              />
              <span>Ice Candy Lovers</span>
            </a>
          </div>
        </nav>

        <main>
          <section className={styles['secao-principal']}>
            <div className="container">
              <h1>Seja Bem-Vindo(a) à Ice Candy Lovers!</h1>
              <p>Descubra o sabor dos nossos geladinhos gourmet e doces deliciosos, feitos com muito amor e ingredientes fresquinhos!</p>
              <a href="#produtos" className={`${styles.btn} btn`} title="Ver nossos produtos">Conheça Nossos Produtos</a>
            </div>
          </section>

          <section className={styles['secao-sobre']}>
            <div className="container">
              <h2>Quem Somos - Ice Candy Lovers</h2>
              <p>Aqui na Ice Candy Lovers, acreditamos que um geladinho pode ser muito mais do que uma sobremesa gelada. Nossos geladinhos gourmet são preparados com ingredientes de alta qualidade, sabores que surpreendem e um montão de carinho. E não para por aí: também temos docinhos deliciosos que vão conquistar seu coração. Vem se deliciar com a gente!</p>
            </div>
          </section>

          <section className={styles['secao-sobre']}>
            <div className="container">
              <h2>Nossa História em Praia Grande</h2>
              <p>A Ice Candy Lovers nasceu do sonho de levar alegria e sabor para os moradores e visitantes de Praia Grande, SP. Desde o início, nosso foco foi criar geladinhos gourmet e doces artesanais que unem qualidade, criatividade e o carinho de quem faz tudo à mão. Hoje, somos referência local em sobremesas geladas e docinhos que conquistam todos os paladares!</p>
            </div>
          </section>


          <section className={styles['secao-produtos']} id="produtos">
            {console.log('Renderizando secao-produtos')}
            <div className="container">
              <h2 className={styles['titulo-produtos']}>Nossos Geladinhos e Doces Gourmet</h2>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className={`${styles['cartao-produto']} cartao-global`}>
                    <Image
                      src="/img/300x200_1.jpeg"
                      alt="Geladinhos Gourmet artesanais em Praia Grande"
                      width={370}
                      height={200}
                      loading="lazy"

                    />
                    <h3>Geladinhos Gourmet</h3>
                    <p style={{ textAlign: 'justify' }}>Seja para se refrescar nos dias quentes ou para curtir momentos especiais, os Geladinhos Gourmet são a escolha perfeita!</p>
                    <p style={{ textAlign: 'justify' }}>Feitos com ingredientes selecionados, combinações irresistíveis e um toque de sofisticação, eles transformam o clássico geladinho em uma verdadeira experiência gastronômica. Experimente o sabor da felicidade em cada geladinho! 🥶💛</p>

                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className={`${styles['cartao-produto']} cartao-global`}>
                    <Image
                      src="/img/300x200_2.jpeg"
                      alt="Geladinhos Alcoólicos gourmet em Praia Grande"
                      width={370}
                      height={200}
                      loading="lazy"
                    />
                    <h3>Geladinhos Alcoólicos</h3>
                    <p style={{ textAlign: 'justify' }}>Combinando sabores intensos e ingredientes de alta qualidade, os Geladinhos Gourmet Alcoólicos são uma versão sofisticada e adulta dos tradicionais geladinhos.</p>
                    <p style={{ textAlign: 'justify' }}>🍷 Feitos com bebidas premium e ingredientes selecionados, eles unem a cremosidade e o sabor irresistível dos Geladinhos Gourmet com aquele toque especial de álcool.</p>

                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className={`${styles['cartao-produto']} cartao-global`}>
                    <Image
                      src="/img/300x200_3.jpeg"
                      alt="Docinhos Gourmet artesanais em Praia Grande"
                      width={370}
                      height={200}
                      loading="lazy"
                    />
                    <h3>Docinhos Gourmet</h3>
                    <p style={{ textAlign: 'justify' }}>🎁✨Surpreenda-se com a Caixinha da Felicidade, uma seleção exclusiva de 4 docinhos gourmet, feitos com ingredientes de alta qualidade e muito carinho. Perfeita para presentear ou se deliciar, cada mordida é uma experiência única!</p>
                    <p style={{ textAlign: 'justify' }}>💝Ideal para presentear quem você ama ou tornar qualquer momento mais doce!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles['secao-depoimentos']}>
            <div className="container">
              <h2>Depoimentos de Clientes Satisfeitos</h2>
              <div className="row">
                {[
                  {
                    id: 1,
                    author: 'Ana Clara',
                    review: 'Os geladinhos da Ice Candy Lovers são incríveis! Sabores únicos e uma cremosidade que faz toda a diferença!',
                    date: '2025-03-08',
                    rating: 5
                  },
                  {
                    id: 2,
                    author: 'João Pedro',
                    review: 'Melhor brigadeiro gourmet que já comi! Super recomendo para qualquer ocasião.',
                    date: '2025-03-13',
                    rating: 5
                  },
                  {
                    id: 3,
                    author: 'Mariana',
                    review: 'Refrescante, saboroso e feito com carinho. Os geladinhos alcoólicos são sensacionais!',
                    date: '2025-03-26',
                    rating: 5
                  }
                ].map((dep) => (
                  <div className="col-md-4 mb-4" key={dep.id}>
                    <div className={`${styles['cartao-depoimento']} cartao-depoimento`}>
                      <div itemScope itemType="https://schema.org/Review" className="d-flex flex-column h-100">
                        <p itemProp="reviewBody" className="flex-grow-1">{`"${dep.review}"`}</p>

                        <div itemProp="author" itemScope itemType="https://schema.org/Person">
                          <h6 itemProp="name" className="mb-3">{`- ${dep.author}`}</h6>
                        </div>

                        <div className={styles.rating}>
                          {'★'.repeat(dep.rating)}{'☆'.repeat(5 - dep.rating)}
                        </div>

                        <small itemProp="datePublished">
                          {new Date(dep.date).toLocaleDateString('pt-BR')}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles['secao-chamada']}>
            <div className="container">
              <h2>Experimente Nossos Sabores em Praia Grande!</h2>
              <p>Entre em contato e saiba onde encontrar nossos geladinhos e doces artesanais. Peça já o seu!</p>
              <a href="/cdn-cgi/l/email-protection#aec7cdcbcdcfc0cad7c2c1d8cbdcdddec9eec9c3cfc7c280cdc1c3" className={`${styles.btn} btn`} title="Envie um e-mail para Ice Candy Lovers">Fale com a Gente</a>
            </div>
          </section>
        </main>

        <ChatBot />

        <footer className={styles.rodape}>
          <div className="container">
            <a href="/login" className={`${styles.btn} btn`} title="Acesse o Sistema de Gestão">Acesse o Sistema</a>
            <p>© 2025 Ice Candy Lovers. Todos os direitos reservados.</p>
            <p>
              <a href="/cdn-cgi/l/email-protection#2b42484e484a454f5247445d4e59585b4c6b4c464a424705484446" title="Envie um e-mail">
                <i className="bi bi-envelope"></i> <span className="__cf_email__" data-cfemail="2b42484e484a454f5247445d4e59585b4c6b4c464a424705484446">[icecandyloverspg@gmail.com]</span>
              </a> |
              <a href="https://www.instagram.com/icecandyloverspg/" target="_blank" title="Siga-nos no Instagram">
                <i className="bi bi-instagram"></i> @icecandyloverspg
              </a>
            </p>
          </div>
        </footer>

        <Script src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/index-script.js" strategy="afterInteractive" />
        <Script id="cloudflare-script" strategy="afterInteractive">
          {`(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'92b730968a88b085',t:'MTc0MzgzNjY1MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();`}
        </Script>
      </div>
    </div>
  );
}