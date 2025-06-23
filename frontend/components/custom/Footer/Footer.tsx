import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__topContent">
          <img src="/logo.png" className="footer__logo" />
          <p>
            Na Loja Oficial do Fluminense, você encontra produtos exclusivos
            para torcer, comemorar e representar todo o orgulho e paixão
            Tricolor. Seja parte desta história e mostre a força das cores
            verde, branco e grená.
          </p>
        </div>
        <FooterLinks />
      </div>
      <div className="footer__middle">
        <div className="footer__middleContent">
          <p>MF MARKETPLACE LTDA - CNPJ.: 52.848.001/0001-94 </p>
          <p>Rua José de Figueiredo - Barra da Tijuca - RJ CEP: 22793-170</p>
          <p>
            Atendimento ao Cliente: atendimento@lojaflu.com.br / (21) 98808-9954
          </p>
          <p>
            Atendimento de 8:00h às 12:00h e 14:00h às 17:00h de segunda a
            sexta.
          </p>
        </div>
      </div>
      <div className="footer__bottom">© 2023 FLUMINENSE FOOTBALL CLUB.</div>
    </footer>
  );
}
