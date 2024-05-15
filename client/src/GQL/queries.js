import { gql } from "@apollo/client";

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

export const GET_PANNE = gql`
  query Pannes {
    pannes {
      id
      pc_n_serie {
        marque
        service_affecte {
          nom
        }
        n_serie
      }
      date_panee
      description
    }
  }
`;
export const GET_PC = gql`
query Pcs {
  pcs {
    n_serie
    c_technique
    date_affectation
    date_entre_magasin
    marque
    service_affecte {
      nom
    }
    c_famille {
      nom
    }
  }
}
`;

export const GET_COMMANDES = gql`
query Commandes {
  commandes {
    id_commande
    id_article {
      nom
    }
    c_bureau {
      nom
    }
    quantite
    date_commande
  }
}
`
export const GET_MARQUES = gql`
query Marque {
  pcs {
    marque
  }
}
`

export const GET_PANNES = gql`
query Pannes {
  pannes {
    id
    description
    pc_n_serie {
      n_serie
    }
    date_panee
  }
}
`

export const GET_DIRECTIONS = gql`
query Directions {
  directions {
    numero
    abs
    nom
  }
}

`