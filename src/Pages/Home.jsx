import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import NeosSlider from "../Components/NeosSlider/NeosSlider";
import Hakkimizda from "../Components/Hakkimizda/Hakkimizda";
import Subeler from "../Components/Subeler/Subeler";
import Mufredat from "../Components/Mufredat/Mufredat";
import Sertifikalar from "../Components/Sertifikalar/Sertifikalar";
import SertifikaInfo from "../Components/SertifikaInfo/SertifikaInfo";
import Iletisim from "../Components/Iletisim/Iletisim";


function Home() {
  return (
    <div className="AnaSayfa">
      <NeosSlider />
      <Container>
        <Hakkimizda
          Title="Hakkımızda"
          Info=" 2020 yılında kurulan Neos Yazılım Akademi; dev uzman kadrosu ile İstanbul, Ankara, İzmir ve Bursa şubelerinde uluslararası kalite standartlarında Yazılım Uzmanlığı eğitimleri vermektedir. Hem yüz yüze hem de uzaktan eğitim seçenekleriyle 100'den fazla sınıfa eğitim vermiş olan kurumumuz; son derece ilgili eğitmenleri ve Amerikan üniversiteleriyle entegre eğitim müfredatı ile mezun ve öğrencilerinden tam puan alarak 2022 Kasım ayında En İyi Yazılım Akademisi ödülü, Aralık ayında ise 3 yıl boyunca tam tarihinde başlayan 100'den fazla sınıfı ile uluslararası ISO 9001 Kalite Belgesi'nin sahibi olmuştur. Vizyonu doğrultusunda 2023 senesinin ilk yarısında faaliyete başlayacak olan Avrupa şubesiyle öğrenci ve mezunları için uluslararası network köprüsünü oluşturup benzersiz bir avantaj sağlamayı hedeflemektedir.Seçtiğiniz yazılım uzmanlığı eğitim programına bağlı olarak, seçkin eğitmenlerden oluşan dev kadromuz sayesinde eksiksiz sunduğumuz; C#, .NET, Python, Django, Node JS, Vanilla JS, jQuery, Bootstrap, HTML, CSS, Sass gibi yazılım ve web geliştirmenin en önemli konularında uzmanlaşabilirsiniz."
        />

        <div className="kart">
          <Subeler
            Egitimler="Online Yazılım Uzmanlığı Eğitimi"
            BaslangicTarih="07 Ağustos 2023"
            Gunler="PAZARTESİ - SALI - PERŞEMBE - CUMA"
            Saatler="20.00 - 23.00"
            ToplamSaat="344 Saat"
            Sure="5 Ay"
            Kontenjan="20"
            KalanKontenjan="5"
            Fiyat="34900 TL"
          />
          <Subeler
            Egitimler="İstanbul Yazılım Uzmanlığı Eğitimi"
            BaslangicTarih="24 Temmuz 2023"
            Gunler="PAZARTESİ - SALI - PERŞEMBE - CUMA"
            Saatler="19.00 - 22.00"
            ToplamSaat="344 Saat"
            Sure="7 Ay"
            Kontenjan="10"
            KalanKontenjan="4"
            Fiyat="49900 TL"
          />
          <Subeler
            Egitimler="Ankara Yazılım Uzmanlığı Eğitimi"
            BaslangicTarih="05 Ağustos 2023"
            Gunler="CUMARTESİ - PAZAR"
            Saatler="10.00 - 14.00"
            ToplamSaat="344 Saat"
            Sure="7 Ay"
            Kontenjan="10"
            KalanKontenjan="2"
            Fiyat="49900 TL"
          />

          <Subeler
            Egitimler="İzmir Yazılım Uzmanlığı Eğitimi"
            BaslangicTarih="22 Temmuz 2023"
            Gunler="CUMARTESİ - PAZAR"
            Saatler="10.00 - 14.00"
            ToplamSaat="344 Saat"
            Sure="7 Ay"
            Kontenjan="10"
            KalanKontenjan="1"
            Fiyat="49900 TL"
          />
        </div>
        <Mufredat
          MufredatBaslik1="Front End Web Geliştirme"
          MufredatIcerik1="Bu kısımda yazılım dünyasına ilk adımımızı web geliştirme ile atıyoruz. Bu kısımda bir web sitesinin kullanıcı tarafını kodlamayı aşağıdaki diller ve kütüphaneler ile öğreniyoruz:"
          FrontendLanguage="HTML ve CSS || SASS-SCSS || JAVASCRIPT || BOOTSTRAP || JQUERY & JQUERY UI || REACT JS || FETCH API"
          MufredatBaslik2="Back End Web Geliştirme"
          MufredatIcerik2="Yazılım uzmanlığı eğitim programlarında back end web geliştirme kısmı kayıt aşamasında seçtiğiniz gruba bağlıdır. Seçtiğiniz eğitim grubuna göre eğitiminizde aşağıdaki 3 müfredattan biri bulunacaktır:"
          BackendLanguage=" PYTHON & DJANGO || NODE JS || C# & .NET MVC CORE"
          MufredatBaslik3="Sektör Simülasyonu"
          MufredatIcerik3="Türkiye'de yalnızca Neos Yazılım Akademi bünyesinde uygulanan sektör simülasyonu ile katılımcılarımız staj öncesinde yazılım sektörünü tanımaya başlamaktadır. Bir yazılımcının iş başvurusundan itibaren işe başlayana kadarki süreçte hangi aşamalardan geçtiğini bizzat deneyimleyen katılımcılarımız, bu bölümde Neos Yazılım Akademi tarafından sektörü tanıyan katılımcılarımız staj sürecine hazır hale gelirler."
          MufredatBaslik4="Staj Süreci"
          MufredatIcerik4="Neos Yazılım Akademi'de gerçekleştirilen stajlar sektörel eğitim kapsamında olup, katılımcıların ilk iş deneyimini kazanmasını sağlamaktadır. Staj sürecinde pek çok gerçek proje üzerinde çalışarak hem bireysel hem de takım çalışmaları gerçekleştirmektedir. Süreç departman şefi ve eğitmenler tarafından yürütülerek disiplin içerisinde en iyi sonucun elde edilmesini sağlar. Staj süreci 1.5 ay sürmekte olup, İstanbul ofisi, Ankara ofisi, İzmir ofisi veya online ortamda gerçekleştirilebilmektedir."
        />
        <Row>
          <Col xs={12} md={12}>
            <SertifikaInfo
              SertifikaTitle="Sertifikalar"
              SertifikaInfo="Neos Yazılım Akademi'de kayıt olduğunuz Yazılım Uzmanlığı eğitimini tamamladığınızda staj süreciniz başlar. Siz staj sürecinde sektörü deneyimlerken biz de adınıza Mudanya Üniversitesi onaylı, uluslararası geçerli ICCW sertifikası, Neos Yazılım Akademi Katılım ve Üstün başarı sertifikası olmak üzere toplam 4 sertifika içerisinden hak kazandıklarınızı hazırlayıp sizlere teslim ederiz. Sertifikalar aşağıda göründüğü gibidir:"
            />
          </Col>

          <Row>
            <Col xs={12} md={3}>
              <Sertifikalar SertifikaImg="https://www.neosyazilim.com/static/img/Paragraf%20metniniz.png" />
            </Col>
            <Col xs={12} md={3}>
              <Sertifikalar SertifikaImg="https://www.neosyazilim.com/static/img/neos.jpeg" />
            </Col>
            <Col xs={12} md={3}>
              <Sertifikalar SertifikaImg="https://www.neosyazilim.com/static/img/sertifikalarBasarii.png" />
            </Col>
            <Col xs={12} md={3}>
              <Sertifikalar SertifikaImg="https://www.neosyazilim.com/static/img/iccw.jpeg" />
            </Col>
          </Row>
        </Row>
        <div className="Contact">
          <Iletisim
            IletisimInfo="Haftanın 7 günü 09:00 - 19:00 arası İstanbul/Bakırköy, Ankara/Kızılay, İzmir/Konak ve Bursa/OsmanGazi'de bulunan şubelerimize her zaman bekleriz. Öncesinde telefonla randevu alabilirsiniz."
            CepTelefon="+905013205358"
            EvTelefon="0212 934 1414"
            Mail="iletisim@neosyazilim.com"
            AnkaraSube="Meşrutiyet Caddesi Meşrutiyet Mahallesi No: 18 Kat:2 Çelik iş hanı Kızılay/Ankara"
            IzmirSube="Hürriyet Bulvarı No: 11 Kat: 2 Konak/İzmir"
            BursaSube="Doğanbey Caddesi Berk 2 Plaza No:3 Kat:10 Demokrasi Meydanı Osmangazi/Bursa"
          />

        
        </div>
      </Container>
    </div>
  );
}

export default Home;
