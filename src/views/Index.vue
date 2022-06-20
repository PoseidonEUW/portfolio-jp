<template>
<section class="hero is-primary is-half-height" id="accueil">
<div class="hero-body has-background-primary">
    <div class="container">
      <div class="columns is-flex is-justify-content-space-between">
        <div class="column is-one-quater">
        <div class="title has-text-centered has-text-weight-bold has-text-secondary" style="font-size:68px">
            Hello ! I'm Jessy Provenzal
        </div>
      </div>
        <!-- <div class="column">
          <figure class="image">
            <img src="https://yoann-bournique.fr/wp-content/uploads/2022/01/Screenshot_20220114-165826-931x2048.jpg" alt="" srcset="">
          </figure>
          </div> -->
        </div>
    </div>
  </div>
  </section>
  <section class="section has-background-primary">
        <div class="divider is-center is-primary has-text-secondary">
    <span class="icon is-large ">
      <router-link class="fa-solid fa-arrow-down fa-4x has-text-secondary" :to="{name:'index', hash:'#accueil'}"></router-link>
    </span>
  </div>
  </section>
<section class="hero is-primary is-halfheight" id="a_propos">
  <div class="hero-body">
    <div class="container">
    <div class="title has-text-secondary" >Qui suis-je ? </div>
      <div class="title mb-6 is-size-4">JESSY PROVENZAL | 21 ans</div>
      <div class="columns">
        <div class="column">
          <div class="subtitle has-text-justified">
            Je suis actuellement étudiant en Bachelor Développeur Web et Mobile en Alternance. Dans cette formation, nous retrouvons une multitude de domaines tels que la programmation informatique, des outils et logiciels de développement web et mobile, ainsi que de 
            l'initiation au webdesign. 
      
          </div>
          <div class="subtitle has-text-justified">
              J'ai toujours été intéressé par le développement web et plus précisément par le développement d'applications logicielles. Je suis également un grand fan de jeux vidéos et j'adore faire de la musculation. 
            Je suis une personne curieuse, active, serieuse et je reste perfectionniste dans l'ensemble des missions qui me sont confiées. Aujourd'hui, j'ai été admis dans la formation MBA Développeur Full-Stack à MyDigitalSchool situé à Angers ! 
            </div>
        </div>
        <div class="column is-one-quarter has-text-centered-mobile">
          <div class="box has-background-secondary has-text-white">
            <!-- <div class="card-content"> -->
              <div class="content">
                 <span class="icon-text">
                  <span class="icon">
                    <i class="fas fa-envelope fa-xl"></i>
                    </span>
                <div class="has-text-weight-bold">EMAIL :</div>
                  </span>
                <p class="is-size-6">jessyprovenzal@hotmail.com</p>
                <span class="icon-text">
                  <span class="icon">
                    <i class="fas fa-solid fa-briefcase fa-xl"></i>
                    </span>
                <div class="has-text-weight-bold">POSTE :</div>
                  </span>
                <p class="is-size-6">Développeur</p>
                <span class="icon-text">
                  <span class="icon">
                    <i class="fas fa-solid fa-phone fa-xl"></i>
                    </span>
                <div class="has-text-weight-bold">TÉLÉPHONE :</div>
                  </span>
                <p class="is-size-6">+33 07 67 16 59 50</p>
              </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
        <div class="columns is-flex is-flex-direction-column">
          <div class="column ">
            
          </div>
          <div class="column ">
            <div class="box has-background-secondary">
              <div class="columns ">
                <div class="column">
                  <div class="subtitle has-text-centered is-uppercase is-underlined">
             <a :href="`${publicPath}CV-Alternance-JP.pdf`" download="CV_JP_2022"> Télécharger mon CV</a>
            </div>
                </div>
                <div class="column">
                    <div class="subtitle has-text-centered is-uppercase is-underlined">
                          <router-link :to="{name:'index', hash:'#portfolio'}"> Mon Portfolio</router-link>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</section>
<section id="formations" class="hero is-primary is-halfheight">
  <div class="hero-body">
    <div class="container">
      <div class="section-heading">
        <h3 class="title is-2 has-text-secondary">Mes Formations</h3>
      </div>

      <div class="tile is-ancestor mt-2">
          <div class="tile is-horizontal">
            <div class="tile is-parent">
              <div class="tile is-child">
                <div class="box has-background-secondary hover_effect ">
                      <div class="content">
                        <h4 class="title is-4 ">2021 - 2022 | MyDigitalSchool - Beaucouzé, 49070</h4>
                        <div class="subtitle is-6 mt-2 has-text-justified"> Étudiant en Bachelor Développeur Web et Mobile à MyDigitalSchool situé à Angers. En alternance chez Nästa en tant que Concepteur Developpeur d'application. </div>
                      </div>
                    </div>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child">
                <div class="box has-background-secondary hover_effect ">
                     <div class="content">
                <h4 class="title is-4 ">2019 - 2021 | Lycée CHEVROLLIER - Angers, 49000</h4>
                <div class="subtitle is-6 mt-2 has-text-justified"> Etudiant en BTS SIO "Services informatiques aux organisations" spécialité SLAM "Solutions Logicielles et Applications Métier" au Lycée Public Polyvalent CHEVROLLIER. Obtention du diplôme en JUIN 2021.</div>
              </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-horizontal">
            <div class="tile is-parent">
              <div class="tile is-child">
                <div class="box has-background-secondary hover_effect ">
                <div class="content">
                  <h4 class="title is-4 ">2017 - 2019 | Lycée JEAN MOULIN - Angers, 49000</h4>
                  <div class="subtitle is-6 mt-2 has-text-justified"> Lycéen au Lycée Public Polyvalent JEAN MOULIN & Obtention d'un BAC STI2D spécialité Energie & Environnement </div>
                </div>
                    </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="competences" class="hero is-primary is-halfheight">
  <div class="hero-body">
    <div class="container">
      <div class="section-heading">
        <h3 class="title is-2 has-text-secondary">Mes Compétences</h3>
      </div>
        <div class="columns mt-5 has-text-white is-uppercase" >
          <div class="column hover_effect mr-6-desktop ">
            <div class="title has-text-centered">Front-End</div>
                <div class="columns">
                  <div class="column is-one-quarter">
                    <div class="subtitle is-6">JavaScript</div>
                  </div>
                  <div class="column">
                      <progress class="progress is-secondary" value="60" max="100"></progress>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-one-quarter">
                    <div class="subtitle is-6">HTML5/CSS3</div>
                  </div>
                  <div class="column">
                      <progress class="progress is-secondary" value="90" max="100"></progress>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-one-quarter">
                    <div class="subtitle is-6">Bulma</div>
                  </div>
                  <div class="column">
                      <progress class="progress is-secondary" value="70" max="100"></progress>
                  </div>
                </div>
                 <div class="columns">
                  <div class="column is-one-quarter">
                    <div class="subtitle is-6">Bootstrap</div>
                  </div>
                  <div class="column">
                      <progress class="progress is-secondary" value="70" max="100"></progress>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-one-quarter">
                    <div class="subtitle is-6">Tailwind CSS</div>
                  </div>
                  <div class="column">
                      <progress class="progress is-secondary" value="70" max="100"></progress>
                  </div>
                </div>
                <div class="columns">
                    <div class="column is-one-quarter">
                      <div class="subtitle is-6">Vue.js</div>
                    </div>
                    <div class="column">
                        <progress class="progress is-secondary" value="60" max="100"></progress>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-one-quarter">
                      <div class="subtitle is-6">React Native</div>
                    </div>
                    <div class="column">
                        <progress class="progress is-secondary" value="40" max="100"></progress>
                    </div>
                </div>
          </div>
          <div class="column hover_effect">
            <div class="title has-text-centered">Back-End</div>
            <div class="columns">
              <div class="column is-one-quarter">
                <div class="subtitle is-6">Python</div>
              </div>
              <div class="column">
                  <progress class="progress is-secondary" value="60" max="100"></progress>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-quarter">
                <div class="subtitle is-6">PHP</div>
              </div>
              <div class="column">
                  <progress class="progress is-secondary" value="65" max="100"></progress>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-quarter">
                <div class="subtitle is-6">C#</div>
              </div>
              <div class="column">
                  <progress class="progress is-secondary" value="52" max="100"></progress>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-quarter">
                <div class="subtitle is-6">Django</div>
              </div>
              <div class="column">
                  <progress class="progress is-secondary" value="45" max="100"></progress>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-quarter">
                <div class="subtitle is-6">SQL</div>
              </div>
              <div class="column">
                  <progress class="progress is-secondary" value="70" max="100"></progress>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-quarter">
                <div class="subtitle is-6">MYSQL</div>
              </div>
              <div class="column">
                  <progress class="progress is-secondary" value="75" max="100"></progress>
              </div>
            </div>
             <div class="columns">
              <div class="column is-one-quarter">
                <div class="subtitle is-6">Laravel</div>
              </div>
              <div class="column">
                  <progress class="progress is-secondary" value="70" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
        <div class="subtitle is-5 mt-6 has-text-justified">Au cours de mes différentes années de formation et de mes projets personnels, j’ai pu acquérir diverses compétences dans une multitude de domaines lié à mon projet professionnel qui est de devenir un Développeur Full-Stack.</div>
      </div>
    </div>
  </section>
   <section id="portfolio" class="hero is-primary is-halfheight">
  <div class="hero-body">
    <div class="container portfolio-container">
      <div class="section-heading">
        <h3 class="title is-2 has-text-secondary">Mon Portfolio</h3>
      </div>
          <div class="columns mt-4">
            <div class="column is-4">
              <!-- admin -->
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    <span>PPE Carantec</span>
                    <span class="is-pulled-right">
                      <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      </a>
                      <span class="tag is-default">Desktop</span>
                      <span class="tag is-success ml-2">Done</span>
                    </span>
                      <span style="font-size:10px" class="has-text-right" >Date: Decembre 2020 – Fin Avril 2021</span>
                  </p>
                </header>
                <div class="card-content">
                  <figure class="image">
                    <!-- <img src="../images/admin.png" alt="Admin template screenshot"> -->
                    <img src="@/assets/carantecred.png" alt="">
                  </figure>
                </div>
                <footer class="card-footer">
                  <a href="http://www.ppecarantec.jessy-provenzal.fr/" class="card-footer-item">Aperçu</a>
                  <a href="https://github.com/PoseidonEUW/PPE4_Ragnarok/tree/master" target="_blank" class="card-footer-item">Code Source</a>
                  <a :href="`${publicPath}JPROVENZAL_E4_PresentationSituationProfessionnelle.pdf`" download="JP_Doc_Detaillé_Examen" class="card-footer-item"> Doc detaillé</a>
                  
                  
                </footer>
              </div>
              <!-- cards -->
            
            </div>
            <div class="column is-4">
              <!-- admin -->
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    <span>Coming soon...</span>
                    <span class="is-pulled-right">
                      <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      </a>
                    </span>
                  </p>
                </header>
                <div class="card-content">
                  <figure class="image">
                    <!-- <img src="../images/admin.png" alt="Admin template screenshot"> -->
                    <img src="@/assets/coming-soon-stamp-3.png" alt="">
                  </figure>
                </div>
                <footer class="card-footer">
                  <a class="card-footer-item">Aperçu</a>
                  <a class="card-footer-item">Code Source</a>
                </footer>
              </div>
              <!-- cards -->
            
            </div>
          </div>
        </div>
    </div>
  </section>

  <section id="contact" class="hero is-primary is-halfheight">
  <div class="hero-body">
    <div class="container">
      <div class="section-heading">
        <h3 class="title is-2 has-text-secondary">Me Contacter</h3>
      </div>

          <div class="subtitle is-3-desktop has-text-white mt-4">
            Vous êtes convaincu ? Alors n’attendez pas pour me contacter !
          </div>
          <div class="subtitle is-4-desktop has-text-secondary mt-4">
            <span class="has-text-weight-bold">TELEPHONE</span> : 07 82 08 01 30
            <br>
            <span class="has-text-weight-bold">EMAIL</span> : jessyprovenzal@hotmail.com
            <br>
            <span class="has-text-weight-bold">LOCALISATION</span> : ANGERS
          </div>
      </div>
    </div>
  </section>

</template>

<script lang="coffee" type="text/coffeescript">
# // @ is an alias to /srcHey

export default {
  name: 'Index',
  components: {
    # HelloWorld
  }
  data: ()->
    publicPath : process.env.BASE_URL
}
</script>
<style lang="scss">
@media screen and (min-width: 1023px) {
.hover_effect{
    transition: transform .2s;
    &:hover{
      transform: scale(1.05);
    }
}
}
</style>