import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
query Articles {
    articles {
      id_article
      nom
      dateentre
      quantite
      reference
      sousFamille {
        nom
      }
      um
      c_famille {
        nom
      }
    }
  }
`;

export const GET_SOUS_FAMILLE = gql`
query Sousfamilles {
  sousfamilles {
    c_sous_famille
    nom
  }
}
`;



export const GET_UTILISATEURS = gql`
    query UTILISATEURS {
        utilisateurs {
            id
            nom
            prenom
            sexe
            email
            numero_de_telephone
            grade
        }
    }
`;