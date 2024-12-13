import './contact.scss'

import visionImg from './resources/vision.jpg'

import andersImg from './resources/AndersL.jpg'
import stefanImg from './resources/Stefan.jpg'

function Contact() {

  return (
    <>
      <div id="contactWrapper">
        <h1>Lär Känna Oss</h1>
        <div id="contactAbout">
          <img src={visionImg} alt="Kor som betar på ett fält." />
          <div id="contactAboutText">
            <article>
              <h3>Vår Vision: Mer än Mat</h3>
              <p>
                Vår vision på En God Granne sträcker sig långt bortom de traditionella
                gränserna för affärsverksamhet och utveckling inom livsmedelsindustrin.
                I en värld där gränserna mellan det ekonomiska, ekologiska och sociala
                alltmer suddas ut, ser vi det som vår skyldighet att agera som en katalysator
                för positiv förändring. Grundat på övertygelsen att varje måltid inte bara
                är en chans att nära kroppen utan också en möjlighet att stärka samhällen
                och skydda vår planet, har vi ägnat oss åt att omdefiniera vad det innebär
                att vara en del av livsmedelskedjan.
              </p>
            </article>
            <article>
              <h3>Från Insikt till Ambition</h3>
              <p>
                Vår resa började med en enkel insikt: att mat inte bara är en vara utan
                en viktig del av vårt kulturarv, vår hälsa och vår planet. Denna insikt
                blev grunden för vår ambition att skapa en mer hållbar framtid för alla,
                oavsett om det handlar om att stödja lokala producenter, främja innovativa
                lösningar för livsmedelsproduktion eller säkerställa att alla har tillgång
                till näringsrik och hållbar mat.
              </p>
            </article>
            <article>
              <h3>Samarbete för en Hållbar Framtid</h3>
              <p>
                Genom att samarbeta med livsmedelsföretag, offentliga måltidsverksamheter,
                dagligvaruhandeln och hotell- & restaurangsektorn, strävar vi efter att bygga
                en stark, hållbar livsmedelskedja som gynnar alla - från bonden som odlar
                råvarorna till den enskilde konsumenten som njuter av den slutliga måltiden.
                Vi är övertygade om att genom att arbeta tillsammans kan vi skapa en värld där
                hållbarhet är normen, inte undantaget.
              </p>
            </article>
            <article>
              <h3>En Del av Något Större</h3>
              <p>
                På En God Granne är vi mer än bara en affärs- och utvecklingspartner; vi är en
                del av en större rörelse mot en hållbarare framtid. Vår vision är djärv men enkel:
                att förändra världen en måltid i taget. Genom vårt engagemang för ekonomisk, ekologisk
                och social hållbarhet, arbetar vi för att inte bara föda dagens befolkning på ett
                ansvarsfullt sätt, utan också för att säkerställa att framtida generationer ärver en
                värld där de kan blomstra. Tillsammans kan vi skapa en framtid där hållbar mat är en
                källa till glädje och gemenskap för alla.
              </p>
            </article>
          </div>
        </div>
        <div id="contactMembers">
          <h2>Vi är en God Granne</h2>
          <div id="contactMembersContainer">
            <article>
              <img src={andersImg} alt="Anders Foto" />
              <h4>Anders Lareke</h4>
              <p>Grundare, VD</p>
            </article>
            <article>
              <img src={stefanImg} alt="Stefan Foto" />
              <h4>Stefan Sonsson</h4>
              <p>Marknadsföringsdirektör</p>
            </article>
          </div>
        </div>
        <div id="contactInfo">
          <h2>Kontakta Oss</h2>
          <div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact