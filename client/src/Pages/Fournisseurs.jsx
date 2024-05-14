import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable, } from 'material-react-table';
import { blue } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const data = [
    { id: 1640191, name: "Papier Ba3id", adresse: "RUE IBNOU EL OUENNANE AIN SEBAA", ville: "CASABLANCA", type_dachat: "-" },
    { id: 3339998, name: "ORTHO REALISATIONS", adresse: "RESIDENCE CHAOUI LT MABROUKA IM 19 N°1", ville: "RABAT", type_dachat: "-" },
    { id: 3346423, name: "STE NATIONALE DES TRANSPORTS ET DE LA LOGISTIQUE SNTL", adresse: "4 RUE AL FADILA QI CYM", ville: "RABAT", type_dachat: "-" },
    { id: 6927100, name: "STE DELTA ACT", adresse: "45 BD GHANDI CITE DAKHLA", ville: "AGADIR", type_dachat: "-" },
    { id: 6928528, name: "STE SELECT BUREAU SARL", adresse: "N° 20 AV ABOU JIHAD CITE AL MASSIRA", ville: "AGADIR", type_dachat: "-" },
    { id: 6980169, name: "STE IMPRIMERIE AFOLKI", adresse: "N°3 LOT ACHAOUI AFREAG", ville: "TIZNIT", type_dachat: "-" },
    { id: 6980436, name: "STE MEDA COPIE SARL", adresse: "88 BLOC C AMICALE DES FONCTIONNAIRES", ville: "TIZNIT", type_dachat: "-" },
    { id: 6980447, name: "STE LIBERTY PNEUS", adresse: "N°35 LOT ASSAKA 3 ROUTE D'AGADIR", ville: "TIZNIT", type_dachat: "-" },
    { id: 6980476, name: "STE ASSAKA NEGOCE", adresse: "N°7 LOT ZAITOUNE AFEAG", ville: "TIZNIT", type_dachat: "-" },
    { id: 14393695, name: "STE GOUS MEDIA ECO SARL", adresse: "RUE DE LA MOSQUEE LES CHALETS", ville: "BIOUGRA", type_dachat: "-" },
    { id: 14431552, name: "STE UKLANE PUB", adresse: "N°20 RUE AFOULKI EL YOUSSOUFIA", ville: "TIZNIT", type_dachat: "-" },
    { id: 14433760, name: "STE SOUSS NEGOCE TECHNIQUE SARL", adresse: "AV BIR ANZARAN N°31", ville: "BIOUGRA", type_dachat: "-" },
    { id: 14462014, name: "SOCIETE GLOBAL STAR DU SOUSS SARL", adresse: "BD ABDELKRIM EL KHATTABI N°86 CITE EL MASSIRA", ville: "AGADIR", type_dachat: "-" },
    { id: 15171616, name: "STE OUBIHI AUTO SARL", adresse: "N°102 LOT AARAFA", ville: "TIZNIT", type_dachat: "-" },
    { id: 18814777, name: "STE LIBRAIRIE MANAHIL AL IRFANE SARL", adresse: "N°9 BLOC A HAY SIDI SAID DRARGA", ville: "AGADIR", type_dachat: "-" },
    { id: 20773022, name: "STE RED ROCKET", adresse: "RIAD SALAM RESIDENCE AFERNI 2 302 B", ville: "AGADIR", type_dachat: "-" },
    { id: 26083893, name: "ALLIANCE IMPREMERIE SARL", adresse: "BLOC A6 N° 59 CITE AL QODS", ville: "AGADIR", type_dachat: "-" },
    { id: 33673242, name: "STE AZERDOU NEGOCE SARL", adresse: "BLOC 43 RUE 39 N°2 AL WAFAQ BENSERGAOU", ville: "AGADIR", type_dachat: "-" },
    { id: 40198628, name: "STE TIZNIT CERAM", adresse: "N°84 BD BIR ANZARANE ROUTE GUELMIM", ville: "TIZNIT", type_dachat: "-" },
    { id: 40272415, name: "STE RACHAM IMMOBILIER", adresse: "N°1 RUE BOUYERD IDGOUFA", ville: "TIZNIT", type_dachat: "-" },
    { id: 40444126, name: "MEGA PRINT AGENCE DE PUBLICITE", adresse: "N°26 BLOC C AMICALES DES FONCTIONNAIRES", ville: "TIZNIT", type_dachat: "-" },
    { id: 40474213, name: "STE SECUTEL SURVEILLANCE", adresse: "N°26 BLOC C AMICALES DES BNAYA", ville: "TIZNIT", type_dachat: "-" },
    { id: 45751531, name: "STE HCH NEGOCE SARL", adresse: "N°74 ANGLE AV FARHAT HACHADE ET GHANDI CITE AL QODS", ville: "AGADIR", type_dachat: "-" },
    { id: 75764468, name: "AZAIM HASSAN", adresse: "7 RUE TENSIFT CITE QODS", ville: "AGADIR", type_dachat: "-" },
    { id: 76144402, name: "STE AL INBIAAT NEGOCE", adresse: "50 HAY AL WIFAQ BENSERGAOU", ville: "AGADIR", type_dachat: "-" },
    { id: 76144761, name: "MAZATEL", adresse: "APP 3 IMM 10 COMPLEXE ARGANA JET SKANA", ville: "AGADIR", type_d_achat: "Noe" },
];

const Fourinsseurs = () => {
    const columns = useMemo(
        () => [
            { accessorKey: 'id', header: 'Code', size: 150 },
            { accessorKey: 'name', header: 'Nom', size: 150 },
            { accessorKey: 'adresse', header: 'Address email', size: 200 },
            { accessorKey: 'ville', header: 'Ville', size: 150 },
            // { accessorKey: 'type_d_achat', header: 'Type d\'achat', size: 50 },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data,
    });

    return (
        <>
            <div className='text-3xl mb-3'>Fourinsseurs</div>
            <div className='flex flex-col gap-2'>
                <Link to="/Add-New-Fournisseur">
                    <button className=" flex items-center justify-center gap-2 text-white border-2 border-blue-700  bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-600 ">
                        <i class="fa-solid fa-user-plus"></i>
                        <span>Ajouter un Fourinsseurs</span>
                    </button>
                </Link>
                <MaterialReactTable table={table} />
            </div>
        </>
    );
};

export default Fourinsseurs;