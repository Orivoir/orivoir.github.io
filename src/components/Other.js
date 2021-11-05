import React from 'react';

import Subtitle from './Subtitle';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import StrongText from './StrongText'


const Other = () => {

  const createItem = ({uri, tag, title}) => (
    <ListItemText>
    <Chip label={tag} variant="outlined" sx={{
      marginRight: theme => theme.spacing(1),
      display: {xs: "none", sm: "none", md: "inline-flex", lg: "inline-flex"}
    }} />
    <Button
      href={`https://openclassrooms.com/forum/sujet/` + uri}
      target="_blank"
      sx={{
        fontSize: {xs: 12, sm: 14, md: 16, lg: 18}
      }}
    >
       {title}
    </Button>
  </ListItemText>
  );

  return (
    <>
      <Subtitle>Autre</Subtitle>

      <List>

        <ListItem>
          <Box>
            <StrongText>
              Langues
            </StrongText>

            <Box sx={{marginLeft: theme => theme.spacing(2)}}>
              <Typography>
                Anglais (Intermédiaire)
              </Typography>
            </Box>
          </Box>
        </ListItem>

        <ListItem>
          <Box>
            <StrongText>
              Centre d'intérêt
            </StrongText>

            <Box sx={{marginLeft: theme => theme.spacing(2)}}>
              <Typography>
                echecs - blitz / bullet (cadence rapide)
              </Typography>

              <Button sx={{marginTop: theme => theme.spacing(1)}} href="https://www.chess.com/member/orivoir" target="_blank" variant="outlined">
                voir plus
              </Button>
            </Box>
          </Box>
        </ListItem>

        <ListItem>
          <Box>
            <Box sx={{marginBottom: theme => theme.spacing(2)}}>
              <StrongText>Openclassrooms - Forum d'entre aide</StrongText>
            </Box>

            <Box>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Typography>Mes interventions</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <List>

                    <ListItem sx={{flexDirection: "column", alignItems: "baseline"}}>

                      {createItem({
                        uri: "afficher-marqueurs-bdd-sur-openstreetmap",
                        tag: "Javascript / PHP",
                        title: "afficher marqueurs sur openstreetmap"
                      })}

                      {createItem({
                        uri: "projet-plateforme-videos-metiers-pour-les-lyceens-1",
                        tag: "Présentation projet",
                        title: "projet plateforme videos metiers pour les lyceens"
                      })}

                      {createItem({
                        uri: "discordbot-1",
                        tag: "Nodejs",
                        title: "Discord Bot"
                      })}

                      {createItem({
                        uri: "charger-une-page-avant-la-redirection",
                        tag: "Javascript",
                        title: "construire une application mono-page"
                      })}

                      {createItem({
                        uri: "ou-est-le-code-necessaire-pour-le-quiz-vue",
                        tag: "Git / Github",
                        title: "Où et le code necessaire ?"
                      })}

                      {createItem({
                        uri: "react-afficher-data-api",
                        tag: "ReactJS / Typescript / API",
                        title: "React afficher data api"
                      })}

                      {createItem({
                        uri: "error-ts2535-object-is-possibly-undefined",
                        tag: "Typescript",
                        title: "Error object is possibly undefined"
                      })}

                      {createItem({
                        uri: "appendchild-ajoutant-un-seul-element",
                        tag: "Javascript / DOM",
                        title: "appendchild ajoutant un seul element"
                      })}

                      {createItem({
                        uri: "probleme-de-format-de-donnees-json",
                        tag: "Javascript / PHP",
                        title: "probleme de format de donnees JSON"
                      })}

                      {createItem({
                        uri: "copier-paragraphe-dans-le-presse-papier",
                        tag: "Javascript / Clipboard API",
                        title: "copier paragraphe dans le presse papier"
                      })}

                      {createItem({
                        uri: "probleme-json-aleatoire",
                        tag: "PHP / SQL / AJAX",
                        title: "probleme JSON aléatoire"
                      })}

                      {createItem({
                        uri: "mise-en-conformite-rgpd",
                        tag: "RGPD",
                        title: "Mise en conformite rgpd"
                      })}

                      {createItem({
                        uri: "extentions-fichier-nodejs",
                        tag: "Nodejs / CLI",
                        title: "lire les arguments de la ligne de commande"
                      })}

                      {createItem({
                        uri: "discord-js-actions-quand-un-membre-rejoint",
                        tag: "Nodejs / Discord Bot",
                        title: "discord.js actions quand un membre rejoint"
                      })}

                      {createItem({
                        uri: "apprendre-le-java-script-en-aveugle",
                        tag: "Javascript / Accessiblité",
                        title: "Apprendre le javascript en aveugle"
                      })}

                      {createItem({
                        uri: "maven-codingame-api-google-guice",
                        tag: "Java / CodinGame API",
                        title: "maven codingame api google guice"
                      })}

                      {createItem({
                        uri: "return-undefined",
                        tag: "Javascript / Geolocation API",
                        title: "Geolocation API return undefined"
                      })}

                      {createItem({
                        uri: "actualiser-page-avec-ajax-sans-spam-requete",
                        tag: "Javascript",
                        title: "Chat en temps réel"
                      })}

                      {createItem({
                        uri: "requete-api-a-la-fermeture-de-la-fenetre",
                        tag: "Javascript / API",
                        title: "requete api a la fermeture de la fenetre"
                      })}

                      {createItem({
                        uri: "js-unexpected-token",
                        tag: "Javascript",
                        title: "js unexpected token"
                      })}

                      {createItem({
                        uri: "probleme-pour-creer-une-api-rest",
                        tag: "Nodejs / API Rest",
                        title: "probleme pour creer une api rest"
                      })}

                      {createItem({
                        uri: "react-nation-flatlist-et-pagination",
                        tag: "React Native",
                        title: "react nation flatlist et pagination"
                      })}

                      {createItem({
                        uri: "orienter-une-reponse-via-un-formulaire-1",
                        tag: "Javascript / DOM",
                        title: "orienter une reponse via un formulaire"
                      })}

                      {createItem({
                        uri: "nodejs-variable-dans-une-fonction-event-driven",
                        tag: "Nodejs",
                        title: "nodejs variable dans une fonction event driven"
                      })}

                      {createItem({
                        uri: "mobile-firts-besoin-daide",
                        tag: "HTML / CSS",
                        title: "mobile firts besoin daide"
                      })}

                      {createItem({
                        uri: "intent-android-1",
                        tag: "Java / Android",
                        title: "intent android"
                      })}



                    </ListItem>

                  </List>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </ListItem>

      </List>

    </>
  );
}

export default Other;